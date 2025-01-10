import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ITransactionFormValue } from '@/types/transactions';
import { formatDateToDDMMYYYY } from '@/utils/transactions';

type ITransaction = Omit<ITransactionFormValue, 'date'> & { date: string };

export const useTransactionsStore = defineStore('transactions', () => {
    const allTransactions = ref<ITransaction[]>([]);

    function addTransaction(transaction: ITransactionFormValue) {
        console.log('add?');
        const clonedTransaction = { ...transaction, date: formatDateToDDMMYYYY(transaction.date) };
        allTransactions.value.unshift(clonedTransaction);
    }

    return {
        allTransactions,
        // lastTransactions,
        // categoryList,
        addTransaction,
    };
});
