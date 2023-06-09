<template>
  <button class="reg-button" @click="goBack" style="display: flex" >Назад</button>
  <div class="content flow-row">
    <div class="item">
      <div class="title">Обновить нагрузки преподавателей:</div>
      <div class="loads-div">Год<input v-model="this.search_year" class="loads-input" type="text"></div>
        <div class="loads-div">tkey<input v-model="this.search_tkey" class="loads-input" type="text"></div>
      <button class="update-button" @click="updateLoads"><img class="loading-img" v-if="isLoadingL" src="./img/loading.gif"><p v-if="!isLoadingL">Запуск</p></button>
    </div>
    <div class="item">
      <div class="title">Обновить данные преподавателей:</div>
      <button class="update-button" @click="updateTeachers"><img class="loading-img" v-if="isLoadingT" src="./img/loading.gif"><p v-if="!isLoadingT">Запуск</p></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['role', 'accountName'],
  data() {
    return {
      isLoadingT: false,
      isLoadingL: false,
      search_year: '2022',
      search_tkey: '',
    }
  },
  methods: {
    goBack() {
      window.location.href = '/';
    },
    async updateTeachers() {
      if (!this.isLoadingL) {
        this.isLoadingT = true;
        await fetch('http://212.193.88.196:8080/updateteachers?user=' + this.accountName);
        this.isLoadingT = false;
      }
    },
    async updateLoads() {
      if (!this.isLoadingT) {
      this.isLoadingL = true;
      await fetch('http://212.193.88.196:8080/updateloads?year=' + this.search_year.toString() + '&tkey=' + this.search_tkey.toString() + '&user=' + this.accountName);
      this.isLoadingL = false;
    }
    }
  }



}
</script>

<style scoped>
.loading-img {
  height: 30px;
  margin: 5px 10px 0px 10px;
}
.loads-div{
  display: flex;
  margin-top:25px;
}
.loads-input {
  margin-left: 15px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  width: 200px;
}

.content {
  display: flex;
  flex-flow: column;
  font-size: 26px;
  justify-content: left;
}
.item {
  margin-top: 80px;
  display: flex;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 500px;
}
.update-button {
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
}

.pressed{
  color: #6a6a6a;
}
</style>