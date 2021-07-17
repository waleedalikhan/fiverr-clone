<template>
  <div class="order">
    <div class="order__title">
      <p class="order__title_text">
        {{ title }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderCol",
  props: {
    title: String,
  },
});
</script>

<style lang="scss" scoped>
.order {
  background: #f4f6f8;
  border-radius: 6px;
  padding: 10px 20px;
  height: 100%;
  min-height: 600px;
  &__title {
    &_text {
      color: #909397;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>