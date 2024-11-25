<script lang="ts" setup>
    import InputNumber from 'primevue/inputnumber';
    import FloatLabel from 'primevue/floatlabel';
    import DatePicker from 'primevue/datepicker';
    import InputText from 'primevue/inputtext';
    import Listbox from 'primevue/listbox';
    import { ref } from 'vue';


    const amount = ref(null);
    const transactionName = ref(null);
    const date = ref(new Date());
    const selectedCategory = ref(null);
    const categories = ref([
        { name: 'Food', icon: 'pi pi-apple' },
        { name: 'Transport', icon: 'pi pi-car' },
        { name: 'Entertainment', icon: 'pi pi-ticket' },
        { name: 'Other', icon: 'pi pi-globe' },
        { name: 'Home', icon: 'pi pi-home' },
        { name: 'Health', icon: 'pi pi-heart' },
        { name: 'Education', icon: 'pi pi-bookmark' },
        { name: 'Clothes', icon: 'pi pi-tags' },
        { name: 'Pets', icon: 'pi pi-discord' },
        { name: 'Groceries', icon: 'pi pi-shopping-cart' },
    ]);

</script>

<template>
    <div class="fields-container">
        <FloatLabel variant="in">
        <InputNumber v-model="amount" mode="currency" currency="RUB" inputId="money_amount" locale="ru-RU" />
        <label for="money_amount" class="font-bold block mb-2">Amount</label>
        </FloatLabel>

        <FloatLabel variant="in">
        <InputText id="transactionName" v-model="transactionName" />
        <label for="transactionName">Transaction name</label>
        </FloatLabel>

        <DatePicker class="date-picker-input" v-model="date" dateFormat="dd.mm.yy" />
    </div>

    <div class="categories-picker-container">
            <Listbox v-model="selectedCategory" :options="categories" optionLabel="name" class="categories-picker"
            listStyle="max-height:200px">
            <template #option="slotProps">
                <div class="category-item">
                <i :alt="slotProps.option.name" :class="slotProps.option.icon" style="width: 18px" />
                <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            </Listbox>
    </div>

</template>

<style scoped>
    .fields-container {
        display: flex;
        flex-direction: column;
    }

    .date-picker-input {
        width: 201px;
        height: 50px;
    }

    .categories-picker-container {
        display: block;
    }

    .categories-picker {
        width: 160px;
        font-size: 12px;
    }

    .category-item {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
</style>
