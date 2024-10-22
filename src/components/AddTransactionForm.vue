<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber';
import FloatLabel from 'primevue/floatlabel';
import { ref } from 'vue';

const amount = ref(null);

</script>


<template>
  <div class="flex-auto">
    <FloatLabel variant="in">
      <InputNumber v-model="amount" mode="currency" currency="RUB" inputId="money_amount" locale="ru-RU" />
      <label for="money_amount" class="font-bold block mb-2">Amount</label>
    </FloatLabel>
  </div>

</template>

<style scoped>

</style>
