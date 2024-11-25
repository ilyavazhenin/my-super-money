<script setup lang="ts">
import LastTransactionTable from '../components/LastTransactionTable.vue'
import AddTransactionForm from '@/components/AddTransactionForm.vue';
</script>

<template>
  <div class="main">

    <section class="general">
      <h1>Balance</h1>
      <div class="balance-row">
        <span class="account-name">Debit card</span>
        <span class="account-sum">100 500 ₽</span>
      </div>

      <h2>Monthly</h2>
      <div class="monthly-data">
        <div class="month-name">November</div>
        <div class="income-this-month">
          <span>Income:</span>
          <span>80 000 ₽</span>
        </div>
        <div class="total-this-month">
          <span>Total:</span>
          <span>100 000 000 ₽</span>
        </div>
        <div class="outcome-this-month">
          <span>Outcome:</span>
          <span>10 000 000 ₽</span>
        </div>
      </div>
    </section>

    <section class="last-transactions">
      <h2>Last Transactions This Month</h2>
      <LastTransactionTable size="small"/>
    </section>

    <section class="add-transaction-form">
      <div class="main-transaction-data">
        <AddTransactionForm />
      </div>
    </section>
    
  </div>
</template>

<style scoped>
.general {
  margin-bottom: 20px;
}

.balance-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.monthly-data {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 10px;
  grid-template-areas:
    'month-name total-this-month'
    'income-this-month outcome-this-month';

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
}
.month-name {
  grid-area: month-name;
}
.income-this-month {
  grid-area: income-this-month;
  display: flex;
  justify-content: start;
  column-gap: 10px;
}
.total-this-month {
  grid-area: total-this-month;
  display: flex;
  justify-content: space-between;
}
.outcome-this-month {
  grid-area: outcome-this-month;
  display: flex;
  justify-content: space-between;
}

.main-transaction-data {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

</style>
