<script lang="ts" setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref } from 'vue'

const transactions = ref([
  {
    name: 'Transaction 1',
    date: '2020-01-01',
    icon: 'pi pi-shopping-cart',
    category: 'Food',
    amount: 100
  },
  {
    name: 'Transaction 1',
    date: '2020-01-01',
    icon: 'pi pi-shopping-cart',
    category: 'Food',
    amount: 100
  },
  {
    name: 'Transaction 1',
    date: '2020-01-01',
    icon: 'pi pi-apple',
    category: 'Food',
    amount: 100
  },
  {
    name: 'Transaction 1',
    date: '2020-01-01',
    icon: 'pi pi-shopping-cart',
    category: 'Food',
    amount: 100
  },
  {
    name: 'Transaction 1',
    date: '2020-01-01',
    icon: 'pi pi-shopping-cart',
    category: 'Food',
    amount: 100
  }
])
</script>

<template>
  <DataTable :value="transactions">
    <Column field="name" header="Name"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="icon" header="Icon">
      <template #body="slotProps">
        <i :class="slotProps.data.icon"></i> </template
    ></Column>
    <Column field="category" header="Category"></Column>
    <Column field="amount" header="Amount"></Column>
  </DataTable>
</template>

<style scoped>
.p-datatable-body-cell-padding {
  padding: 200px;
}
</style>
