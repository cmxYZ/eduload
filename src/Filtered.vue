<template>
  <button class="reg-button" @click="goBack" style="display: flex" >Назад</button>
  <button class="reg-button" @click="loadExcelByTkey">Экспорт в Excel</button>
  <div class="reg" style="display: flex" >Преподаватель: {{this.name}}, {{this.info}}, {{this.year}}</div>
  <button class="reg-button" @click="reload" style="display: flex" >Рассчитать</button>
  <div class="reg" style="display: flex" >Кол-во часов на почасовую оплату: {{this.hours}}</div>
  <div class="reg" style="display: flex" >Часы почасовой оплаты: {{getHours()}}</div>
  <div class="reg" style="display: flex" >Разница: {{this.diff}}</div>

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
import AG_GRID_LOCALE_RU from "@/components/locale.ru.js";
import checkboxCellRenderer from "@/components/checkboxCellRenderer";

export default {
  props: ['role', 'accountName'],
  beforeMount() {
    this.fetchJson();
    this.ruLocale = AG_GRID_LOCALE_RU;
    this.name = this.$route.query.name;
    this.info = this.$route.query.info;
    this.year = this.$route.query.year;
    this.hours = this.$route.query.hours;
  },
  components: {
    AGGrid,
    checkboxCellRenderer
  },
  data() {
    return {
      diff: 0,
      gridData: [],
      columnDefs: [
        { headerName: "№", valueGetter: params => {
            return params.node ? params.node.rowIndex + 1 : null;
          }, width: 40, },
        { headerName: "Дисциплина", field: "disciplineName", width: 280, filter: true, floatingFilter: true,},
        { headerName: "Академическая группа", field: "groupsHistory", width: 140, filter: true, floatingFilter: true,},
        { headerName: "Семестр", field: "semester",  width: 120, filter: true, floatingFilter: true,},
        { headerName: "Вид нагрузки", field: "loadType", width: 180, filter: true, floatingFilter: true,},
        { headerName: "Формирующая кафедра", field: "formingDivisionuuid", width: 215, filter: true, floatingFilter: true,},
        { headerName: "Читающая кафедра", field: "readingDivisionuuid", width: 300, filter: true, floatingFilter: true,},
        { headerName: "Тип нагрузки", field: "compensationType", width: 120, filter: true, floatingFilter: true,},
        { headerName: "Планируемое кол-во часов", field: "plannedHours", width: 110,},
        { headerName: "Фактическое кол-во часов", valueGetter: params => {
            return params.data.realHours;
          },
          valueSetter: params => {
            let new_value = parseFloat(params.newValue).toFixed(2);
            if (isNaN(new_value)) {
              new_value = 0;
            }
            let url = 'http://212.193.88.196:8080/changerealhours?id=' + params.data.id + '&value=' + new_value + '&user=' + this.accountName;
            fetch(url);
            params.data.realHours = new_value;
            params.data.diff = (params.data.plannedHours - params.data.realHours).toFixed(2);
            return true;
          }, editable: this.isEditable(this.role), width: 110,},
        { headerName: "Разница", field: "diff", width: 90},
        { headerName: "Почасовая оплата", field: "isHour", width: 90, cellRenderer: "checkboxCellRenderer" },
      ],
      defaultColDef: {
        sortable: true,
        resizable: true,
        spanHeaderHeight: true,
        wrapHeaderText: true,
        minWidth: 30,
        wrapText: true,
        autoHeight: true,
        autoHeaderHeight: true,
      },
    };
  },
  methods: {
    loadExcelByTkey() {
      window.open("http://212.193.88.196:8080/loadexcelbytkey?tkey=" + this.$route.query.tkey + '&year=' + this.$route.query.year + '&user=' + this.accountName, "_blank");
    },
    reload () {
      location.reload();
    },
    getHours() {
      let sum = 0;
        this.gridData.forEach(element => {
          if (element.isHour == 1) {
            sum += parseFloat(element.plannedHours);
          }
        })
      this.diff = (parseFloat(this.hours) - sum).toFixed(2);
      return sum.toFixed(2);
    },
    goBack() {
      window.location.href = '/';
    },
    async fetchJson() {
      let json;
      await fetch("http://212.193.88.196:8080/loaddatabytkey?tkey=" + this.$route.query.tkey + '&year=' + this.$route.query.year)
          .then((resp) => resp.text())
          .then((razm) => (json = razm));
      this.gridData = JSON.parse(json);
      this.gridData.forEach(element => {element.role = this.role; element.accountName = this.accountName;})
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
  height: 900px;
  max-width: 1820px;
  width: 100%;
  align-content: stretch;
}
</style>