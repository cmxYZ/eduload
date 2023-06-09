<template>
  <button @click="infoClick()"><img src="../img/info.png" alt=""></button>
</template>

<script>
export default {
  setup(props) {
    function infoClick()
    {
      window.location.href = '/filtered?tkey=' + props.params.value.toString() + '&name=' + props.params.data.name.toString() + '&info=' +
          props.params.data.infoWorkPlaces.toString() + '&year=' + props.params.data.year.toString() + '&hours=' + props.params.data.hours.toString();
    }
    return {
      infoClick,
    };
  }
}
</script>

<style scoped>
img {
  width: 26px;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>