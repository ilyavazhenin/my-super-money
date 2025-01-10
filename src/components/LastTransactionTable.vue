<script lang="ts" setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ScrollPanel from 'primevue/scrollpanel';
import { useTransactionsStore } from '@/stores/allTransactions';
import { formatMoneySum } from '@/utils/transactions';

const { allTransactions } = useTransactionsStore();
</script>

<template>
    <ScrollPanel style="width: 100%; height: 120px" class="scrollable-container">
        <DataTable
            :value="allTransactions"
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
            <Column field="category.icon">
                <template #body="slotProps">
                    <i :class="slotProps.data.category.icon"></i>
                </template>
            </Column>
            <Column field="category.name"></Column>
            <Column field="amount">
                <template #body="slotProps">
                    {{ formatMoneySum(slotProps.data.amount) }}
                </template></Column
            >
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
