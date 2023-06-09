<template>
  <input
      type="checkbox"
      @click="checkedHandler($event)"
      :checked="params.value"
  />
</template>

<script>
export default {
  setup(props) {

    function checkedHandler(event) {
      if (props.params.data.role == 'write' || props.params.data.role == 'admin') {
        let checked = event.target.checked;
        let url = 'http://212.193.88.196:8080/changeishour?id=' + props.params.data.id + '&value=' + checked + '&user=' + props.params.data.accountName;
        fetch(url);
      } else {
        event.target.checked = !event.target.checked;
      }

    }
    return {
      checkedHandler
    };
  }
}
</script>

<style scoped>
input {
  width: 20px;
  height: 20px;
}
div {
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