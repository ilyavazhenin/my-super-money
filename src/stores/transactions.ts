import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface ICategory {
    name: string;
    id: number;
    icon: string;
};

export interface ITransaction {
    id: number | null;
    amount: number | null;
    name: string | null;
    date: Date;
    category: ICategory;
    type: 'expense' | 'income';
}

const defaultCategory = { name: 'Food', id: 1, icon: 'pi pi-apple'};

const unfilledTransaction: ITransaction = {
    id: 0,
    amount: null,
    name: null,
    date: new Date(),
    category: defaultCategory,
    type: 'expense'
};

export const useTransactionsStore = defineStore('transactions', () => {
    const transaction = ref<ITransaction>(unfilledTransaction);

    const categoryList = ref<ICategory[]>([
        { id: 1, name: 'Food', icon: 'pi pi-apple' },
        { id: 2, name: 'Transport', icon: 'pi pi-car' },
        { id: 3, name: 'Entertainment', icon: 'pi pi-ticket' },
        { id: 4, name: 'Other', icon: 'pi pi-globe' },
        { id: 5, name: 'Home', icon: 'pi pi-home' },
        { id: 6, name: 'Health', icon: 'pi pi-heart' },
        { id: 7, name: 'Education', icon: 'pi pi-bookmark' },
        { id: 8, name: 'Clothes', icon: 'pi pi-tags' },
        { id: 9, name: 'Pets', icon: 'pi pi-discord' },
        { id: 10, name: 'Groceries', icon: 'pi pi-shopping-cart' },
    ]);
    
    const allTransactions = ref<ITransaction[]>([]);

    function clearForm() {
        transaction.value.id = 0;
        transaction.value.amount = null;
        transaction.value.name = null;
        transaction.value.date = new Date();
        transaction.value.category = defaultCategory;
        transaction.value.type = 'expense';
    }
  
    function addTransaction() { 
        allTransactions.value.unshift(transaction.value)
    }

    return { transaction, allTransactions, categoryList, addTransaction, clearForm };
})
