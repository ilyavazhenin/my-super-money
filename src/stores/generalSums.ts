import { ref } from 'vue';
import { defineStore } from 'pinia';

//TODO: сделать отдельный стор и таблицу в базе на случай, если будет много транзакций
const generalSums = defineStore('generalSums', () => {
    const totalBalance = ref(0);
    const totalIncome = ref(0);
    const totalExpenses = ref(0);
    const monthlyBalance = ref(0);
    const monthlyIncome = ref(0);
    const monthlyExpenses = ref(0);

    function updateAllBalances(amount: number, type: 'expense' | 'income') {
        const amountWithSign = type === 'expense' ? -amount : amount;
        totalBalance.value += amount;
        totalIncome.value += income;
        totalExpenses.value += expenses;
    }

    return {
        totalBalance,
        totalIncome,
        totalExpenses,
        monthlyBalance,
        monthlyIncome,
        monthlyExpenses,
    };
});
