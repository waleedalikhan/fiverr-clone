<template>
  <div class="order-card">
    <div class="order-card__item">
      <div class="order-card__dots">
        <button class="order-card__dots_button">...</button>
      </div>
      <div class="order-card__details">
        <div class="order-card__details_img">
          <img src="../../assets/img/product.jpeg" alt="" />
        </div>
        <div class="order-card__details_info">
          <div class="order-card__details_info_row">
            <div :class="orderStatusClass">{{ orderStatus }}</div>
          </div>
          <div class="order-card__details_info_row">
            <div class="order-card__details_info_daysleft">
              <i class="far fa-clock"></i> <span>{{ daysLeft }}</span>
            </div>
          </div>
          <div class="order-card__details_info_row">
            <div class="order-card__details_info_prices">
              <span
                v-if="duration"
                class="order-card__details_info_prices_duration"
                >{{ duration }}</span
              >
              <span
                v-if="duration"
                class="order-card__details_info_prices_divider"
                >|</span
              >
              <span class="order-card__details_info_prices_price">{{
                price
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-card__divider"></div>
    <div class="order-card__actions">
      <div class="order-card__actions_text">
        <button>View Order</button>
      </div>
      <div class="order-card__actions_buttons">
        <button class="order-card__actions_buttons_msg">
          <i class="far fa-comment"></i>
        </button>
        <button class="order-card__actions_buttons_client"></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "OrderCard",
  props: {
    index: Number,
    orderStatus: String,
    daysLeft: String,
    duration: String,
    price: String,
  },
  setup(props) {
    const orderStatusClass = computed(() => {
      switch (props.orderStatus) {
        case "new order":
          return "order-card__details_info_chip_neworder";
        case "in progress":
          return "order-card__details_info_chip_inprogress";
        case "delivered":
          return "order-card__details_info_chip_delivered";
        case "completed":
          return "order-card__details_info_chip_completed";
        case "cancelled":
          return "order-card__details_info_chip_cancelled";
        default:
          return "order-card__details_info_chip";
      }
    });

    return {
      orderStatusClass,
    };
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #909397;
$secondary-color: #414145;
$active-color: #2ab875;
$new-order-text-color: #815d3e;
$inprogress-order-text-color: #7986a8;
$delivered-order-text-color: #8b5c72;
$completed-order-text-color: #5e8170;
$cancelled-order-text-color: #757a88;
$new-order-color: #ffecd0;
$inprogress-order-color: #d3dffa;
$delivered-order-color: #ffd7ec;
$completed-order-color: #ccf3e1;
$cancelled-order-color: #e4e6e7;

.order-card {
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  &__item {
    padding: 0 14px 14px 14px;
    flex: 100%;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  &__dots {
    flex: 100%;
    display: flex;
    justify-content: flex-end;
    &_button {
      background: transparent;
      outline: none;
      border: 0;
      box-shadow: none;
      font-size: 22px;
      padding: 0;
      color: $primary-color;
      &:focus {
        outline: none;
        border: 0;
        box-shadow: none;
      }
    }
  }
  &__details {
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    &_img {
      width: 120px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #efefef;
        border-radius: 6px;
      }
    }
    &_info {
      flex-grow: 1;
      text-align: right;
      display: flex;
      flex-wrap: wrap;
      &_row {
        flex: 100%;
      }
      &_chip {
        padding: 3px 14px;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 700;
        display: inline-flex;
        border-radius: 20px;
        &_neworder {
          color: $new-order-text-color;
          background: $new-order-color;
          padding: 3px 14px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          border-radius: 20px;
        }
        &_inprogress {
          color: $inprogress-order-text-color;
          background: $inprogress-order-color;
          padding: 3px 14px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          border-radius: 20px;
        }
        &_delivered {
          color: $delivered-order-text-color;
          background: $delivered-order-color;
          padding: 3px 14px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          border-radius: 20px;
        }
        &_completed {
          color: $completed-order-text-color;
          background: $completed-order-color;
          padding: 3px 14px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          border-radius: 20px;
        }
        &_cancelled {
          color: $cancelled-order-text-color;
          background: $cancelled-order-color;
          padding: 3px 14px;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          display: inline-flex;
          border-radius: 20px;
        }
      }
      &_daysleft {
        margin-top: 10px;
        margin-bottom: 8px;
        color: $primary-color;
        font-size: 14px;
        span {
          margin-left: 6px;
        }
      }
      &_prices {
        color: $primary-color;
        font-size: 14px;
        &_divider {
          color: rgba($color: #909397, $alpha: 0.4);
          font-size: 12px;
          margin-left: 4px;
          margin-right: 4px;
        }
        &_price {
          color: $secondary-color;
          font-weight: 700;
        }
      }
    }
  }
  &__divider {
    flex: 100%;
    background: #efefef;
    height: 1px;
  }
  &__actions {
    flex: 100%;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_text {
      button {
        color: $primary-color;
        background: transparent;
        outline: none;
        border: 0;
        box-shadow: none;
        letter-spacing: 0.3px;
        &:focus {
          outline: none;
          border: 0;
        }
      }
    }
    &_buttons {
      display: flex;
      align-items: center;
      &_msg {
        background: transparent;
        outline: none;
        border: 0;
        box-shadow: none;
        color: #ddd5d5;
        font-size: 20px;
        margin-right: 10px;
        &:focus {
          outline: none;
          border: 0;
          box-shadow: none;
        }
      }
      &_client {
        background: url("../../assets/img/avatar-2.jpeg") center / cover
          no-repeat;
        height: 25px;
        width: 25px;
        outline: none;
        border: 1px solid #efefef;
        box-shadow: none;
        border-radius: 50%;
        &:focus {
          outline: none;
          border: 0;
          box-shadow: none;
        }
      }
    }
  }
}
</style>