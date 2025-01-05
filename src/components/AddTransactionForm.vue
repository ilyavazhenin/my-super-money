<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import Button from 'primevue/button';
import { ref } from 'vue';

import { useTransactionsStore } from '@/stores/transactions';

const { transaction, categoryList, clearForm } = useTransactionsStore();

// const amount = ref(null);
// const transactionName = ref(null);
// const date = ref(new Date());

// const categories = ref([
//     { name: 'Food', icon: 'pi pi-apple' },
//     { name: 'Transport', icon: 'pi pi-car' },
//     { name: 'Entertainment', icon: 'pi pi-ticket' },
//     { name: 'Other', icon: 'pi pi-globe' },
//     { name: 'Home', icon: 'pi pi-home' },
//     { name: 'Health', icon: 'pi pi-heart' },
//     { name: 'Education', icon: 'pi pi-bookmark' },
//     { name: 'Clothes', icon: 'pi pi-tags' },
//     { name: 'Pets', icon: 'pi pi-discord' },
//     { name: 'Groceries', icon: 'pi pi-shopping-cart' },
// ]);
const selectedCategory = ref(categoryList[0]);

const scrollDownOnAmountClick = () => {
    setTimeout(() => {
        window.scrollTo({
            top: window.scrollY + 150,
            behavior: 'smooth',
        });
    }, 400);
};

const handleSubmit = () => {
    console.log(transaction.date, transaction.category, transaction.amount, transaction.name);
    console.log('Submitted');
    clearForm();
    console.log(transaction.date, transaction.category, transaction.amount, transaction.name);
};
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="inputs-container">
            <div class="fields-container">
                <FloatLabel variant="in">
                    <InputNumber
                        v-model="transaction.amount"
                        mode="currency"
                        currency="RUB"
                        input-id="money_amount"
                        locale="ru-RU"
                        inputmode="numeric"
                        fluid="false"
                        @click="scrollDownOnAmountClick"
                    />
                    <label for="money_amount">Amount</label>
                </FloatLabel>

                <FloatLabel variant="in">
                    <InputText
                        id="transactionName"
                        v-model="transaction.name"
                        class="transaction-input"
                    />
                    <label for="transactionName">Transaction name</label>
                </FloatLabel>

                <DatePicker
                    v-model="transaction.date"
                    class="date-picker-input"
                    date-format="dd.mm.yy"
                />
            </div>

            <div class="categories-picker-container">
                <Listbox
                    v-model="transaction.category"
                    :options="categoryList"
                    default-value="categoryList[0]"
                    option-label="name"
                    class="categories-picker"
                    list-style="max-height:200px"
                >
                    <template #option="slotProps">
                        <div class="category-item">
                            <i
                                :alt="slotProps.option.name"
                                :class="slotProps.option.icon"
                                style="width: 18px"
                            />
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Listbox>
            </div>
        </div>

        <div class="add-button-container">
            <Button label="Submit" type="submit" />
        </div>
    </form>
</template>

<style scoped>
.add-button-container {
    text-align: right;
    margin-bottom: 5px;
}

.inputs-container {
    display: flex;
    justify-content: space-between;
}

.fields-container {
    display: flex;
    flex-direction: column;
    width: 170px;
}

.date-picker-input {
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

.transaction-input {
    width: 100%;
}
</style>
