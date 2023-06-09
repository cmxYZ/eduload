<template>
  <ag-grid-vue
      style="width: 100%; height: 100%"
      class="ag-theme-alpine"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="gridData"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import infoCellRenderer from './infoCellRenderer';

export default {
  props: ['gridData', 'columnDefs', 'defaultColDef'],
  name: "App",
  components: {
    AgGridVue,
    infoCellRenderer
  },
  setup() {
    return {

    };
  },
};
</script>

<style>
.ag-theme-alpine {
  --ag-header-foreground-color: white;
  --ag-header-background-color: #4B79BB;
  --ag-header-cell-hover-background-color: #355787;
  --ag-header-cell-moving-background-color: #355787;
}
.ag-theme-alpine .ag-header-group-cell {
  font-weight: normal;
  font-size: 18px;
}
.ag-theme-alpine .ag-header-group-cell-label{
  justify-content: center;
}
.ag-theme-alpine .ag-header-cell {
  font-weight: normal;
  font-size: 14px;
}

.ag-input-field-input{
  color: black !important;
}

.ag-cell {
  page-break-inside: avoid !important;
}

</style>