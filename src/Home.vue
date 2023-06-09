<template>
  <div style="display: flex" class="reg" v-if="isLoading">Загрузка таблицы...</div>
  <button class="reg-button" @click="loadExcel">Экспорт в Excel</button>
  <div class="table" ><AGGrid
      :gridData="gridData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :getRowId="getRowId"
      :localeText="ruLocale"
  ></AGGrid></div>
</template>

<script>
import AGGrid from "@/components/AGGrid.vue";
import infoCellRenderer from "@/components/infoCellRenderer";
import AG_GRID_LOCALE_RU from "@/components/locale.ru.js";

export default {
  props: ['role', 'accountName'],
  beforeMount() {
    this.fetchJson();
    this.ruLocale = AG_GRID_LOCALE_RU;
  },
  components: {
    AGGrid,
    infoCellRenderer
  },
  data() {
    return {
      isLoading: true,
      gridData: [],
      columnDefs: [
        { headerName: "", field: "tkey", cellRenderer: "infoCellRenderer", width: 50},
        { headerName: "№", valueGetter: params => {
            return params.node ? params.node.rowIndex + 1 : null;
          }, width: 55, },
        { headerName: "ФИО", field: "name", width: 255, filter: true, floatingFilter: true,},
        { headerName: "Должность/Место работы", field: "infoWorkPlaces", width: 260, filter: true, floatingFilter: true,},
        { headerName: "Ставка", valueGetter: params => {
          if (params.data.stake == '' || params.data.stake == null)
          {
            return '0';
          }
          return params.data.stake;
          },
          valueSetter: params => {
            let new_value = parseFloat(params.newValue).toFixed(2);
            if (isNaN(new_value)) {
              new_value = 0;
            }
            let url = 'http://212.193.88.196:8080/changestake?tkey=' + params.data.tkey + '&value=' + new_value + '&year=' + params.data.year + '&user=' + this.accountName;
            fetch(url);
            params.data.stake = new_value;
            return true;
          },  editable: this.isEditable(this.role), width: 70},
        { headerName: "Часы на ставку",
          valueGetter: params => {
            return params.data.hoursOnStake;
          },
          valueSetter: params => {
            let new_value = parseFloat(params.newValue).toFixed(2);
            if (isNaN(new_value)) {
              new_value = 0;
            }
            let url = 'http://212.193.88.196:8080/changehours?guidPerson1C=' + params.data.guidPerson1C + '&value=' + new_value + '&user=' + this.accountName;
            fetch(url);
            params.data.hoursOnStake = new_value;
            params.data.hours = (params.data.bHoursPlaned - params.data.hoursOnStake).toFixed(2);
            return true;
          },
          editable: this.isEditable(this.role), width: 80},
        { headerName: "Кол-во часов на почасовую оплату",
          valueGetter: params => {
            return params.data.hours;
          },
          valueSetter: params => {
            let new_value = parseFloat(params.newValue).toFixed(2);
            params.data.hours = new_value;
            return true;
          }, width: 100},
        {
          headerName: 'Бюджет',
          children: [
            { headerName: "Планируемое кол-во часов", field: "bHoursPlaned", width: 110},
            { headerName: "Фактическое кол-во часов", field: "bHoursReal", width: 110},
            { headerName: "Разница", field: "bHoursDiff", width: 80},
          ],
        },
        {
          headerName: 'Контракт',
          children: [
            {headerName: "Планируемое кол-во часов", field: "cHoursPlaned", width: 110},
            {headerName: "Фактическое кол-во часов", field: "cHoursReal", width: 110},
            {headerName: "Разница", field: "cHoursDiff", width: 80},
          ],
        },
        {
          headerName: 'Общее',
          children: [
            { headerName: "Планируемое кол-во часов", field: "hoursPlaned", width: 110 },
            { headerName: "Фактическое кол-во часов", field: "hoursReal", width: 110 },
            { headerName: "Разница", field: "hoursDiff", width: 80 },
          ],
        },
        { headerName: "Год", field: "year", width: 110, filter: true, floatingFilter: true,},
      ],
      defaultColDef: {
        sortable: true,
        resizable: true,
        spanHeaderHeight: true,
        wrapHeaderText: true,
        minWidth: 50,
        wrapText: true,
        autoHeight: true,
        autoHeaderHeight: true
      },
    };
  },
  methods: {
    loadExcel() {
      window.open("http://212.193.88.196:8080/loadexcel?user=" + this.accountName, "_blank");
    },
    async fetchJson() {
      let json;
      let url = "http://212.193.88.196:8080/loaddata";
      if (this.role == 'teacher') {
        url = "http://212.193.88.196:8080/loaddata?accountName=" + this.accountName;
      }
      await fetch(url)
        .then((resp) => resp.text())
        .then((razm) => (json = razm));
      if (json != 'No data') {
        this.gridData = await JSON.parse(json);
      }
      this.isLoading = false;
    },
    isEditable(role) {
      return role == 'admin' || role == 'write';
    }
  },
};


</script>

<style scoped>

.table {
  margin-top: 20px;
  display: flex;
  align-content: stretch;
  height: 900px;
  width: 100%;
  max-width: 1905px;
}
</style>
