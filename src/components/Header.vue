<template>
    <header>
        <div class="logo">
            <img src="@/img/rtflogo.png" alt="">
            <div class="logotext">Система мониторинга учебной нагрузки преподавателей ИРИТ-РТФ</div>
        </div>
        <button v-if="isAdmin()" @click="openAP">Админ. панель</button>
    </header>
</template>

<script>

export default {
  props: ['role'],
  data () {
    return {
      defaultColDef: {
        sortable: true, //сортировка колонок
        resizable: true, //изменение размера колонок
        autoHeight: true, //автоматическая настройка высоты
      },

      columnDefs: [
        {
          headerName: "Имя колонки",
          field: "Имя переменной значения",
          width: "Ширина колонки"
          //И другие...
        },
      ],
    }
  },
  methods: {
    isAdmin() {
      return this.role == 'admin';
    },
    openAP() {
      window.location.href = '/admin'
    }
  }
}
</script>

<style scoped>
img {
    height: 100px;
}

header {
    width: 100%;
    height: 100px;
    background-color: rgb(221, 221, 221);
    flex: 1 100px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    position: relative;
}

button {
    display: inline-block;
    padding: 5px;
    border-radius: 10px;
}

.logotext {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
}

.logo {
    display: flex;
    align-items: center;
}

.menu {
    height: 49px;
    width: 49px;
}
</style>