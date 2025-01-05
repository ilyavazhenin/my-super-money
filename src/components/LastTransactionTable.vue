<script lang="ts" setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ScrollPanel from 'primevue/scrollpanel';
import { ref } from 'vue';

const transactions = ref([
    {
        name: 'Transaction 1',
        date: '2020-01-01',
        icon: 'pi pi-shopping-cart',
        category: 'Food',
        amount: 100,
    },
    {
        name: 'Transaction 1',
        date: '2020-01-01',
        icon: 'pi pi-shopping-cart',
        category: 'Food',
        amount: 100,
    },
    {
        name: 'Transaction 1',
        date: '2020-01-01',
        icon: 'pi pi-apple',
        category: 'Food',
        amount: 100,
    },
    {
        name: 'Transaction 1',
        date: '2020-01-01',
        icon: 'pi pi-shopping-cart',
        category: 'Food',
        amount: 100,
    },
    {
        name: 'Transaction 1',
        date: '2020-01-01',
        icon: 'pi pi-shopping-cart',
        category: 'Food',
        amount: 100,
    },
]);
</script>

<template>
    <ScrollPanel style="width: 100%; height: 120px" class="scrollable-container">
        <DataTable
            :value="transactions"
            class="table"
            :size="'small'"
            :pt="{
                column: {
                    bodyCell: { style: { padding: '3px' } },
                    headerCell: { style: { padding: '3px' } },
                },
            }"
        >
            <Column field="name"></Column>
            <Column field="date"></Column>
            <Column field="icon">
                <template #body="slotProps">
                    <i :class="slotProps.data.icon"></i>
                </template>
            </Column>
            <Column field="category"></Column>
            <Column field="amount"></Column>
        </DataTable>
    </ScrollPanel>
</template>

<style scoped>
.table {
    font-size: 10px;
}

.cell {
    padding: 1px;
    color: red;
    font-size: 100px;
}

.scrollable-container {
    border: 1px solid #49494a;
    border-radius: 3px;
    margin-bottom: 5px;
}
</style>
