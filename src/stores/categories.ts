import { ref } from 'vue';
import { defineStore } from 'pinia';

export interface ICategory {
    id: number;
    name: string;
    icon: string;
}

export const useCategoriesStore = defineStore('categories', () => {
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

    return { categoryList };
});
