<template>
  <div class="container grid">
    <div class="grid__col">
      <OrderCol title="new orders">
        <template v-for="(card, index) in newOrders" :key="index">
          <OrderCard
            :index="index"
            :orderStatus="card.orderStatus"
            :daysLeft="card.daysLeft"
            :duration="card.duration"
            :price="card.price"
          />
        </template>
      </OrderCol>
    </div>
    <div class="grid__col">
      <OrderCol title="in progress">
        <template v-for="(card, index) in inProgressOrders" :key="index">
          <OrderCard
            :index="index"
            :orderStatus="card.orderStatus"
            :daysLeft="card.daysLeft"
            :duration="card.duration"
            :price="card.price"
          />
        </template>
      </OrderCol>
    </div>
    <div class="grid__col">
      <OrderCol title="waiting for buyer">
        <template v-for="(card, index) in deliveredOrders" :key="index">
          <OrderCard
            :index="index"
            :orderStatus="card.orderStatus"
            :daysLeft="card.daysLeft"
            :duration="card.duration"
            :price="card.price"
          />
        </template>
      </OrderCol>
    </div>
    <div class="grid__col">
      <OrderCol title="completed">
        <template v-for="(card, index) in completedOrders" :key="index">
          <OrderCard
            :index="index"
            :orderStatus="card.orderStatus"
            :daysLeft="card.daysLeft"
            :duration="card.duration"
            :price="card.price"
          />
        </template>
      </OrderCol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import OrderCol from "../global/OrderCol.vue";
import OrderCard from "../global/OrderCard.vue";
import { IOrderCard } from "../../utils/interface";
import * as orders from "../../utils/mock";

export default defineComponent({
  name: "Home",
  components: {
    OrderCol,
    OrderCard,
  },
  setup() {
    const newOrders = ref<IOrderCard[]>(orders.newOrders);
    const inProgressOrders = ref<IOrderCard[]>(orders.inProgressOrders);
    const deliveredOrders = ref<IOrderCard[]>(orders.deliveredOrders);
    const completedOrders = ref<IOrderCard[]>(orders.completedOrders);

    return {
      newOrders,
      inProgressOrders,
      deliveredOrders,
      completedOrders,
    };
  },
});
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  margin-top: 28px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
}
</style>