<template>
  <header id="header" class="header">
    <nav class="container header__navbar">
      <div class="header__info">
        <svg
          width="89"
          height="27"
          viewBox="0 0 89 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#64646a">
            <path
              d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"
            ></path>
          </g>
          <g fill="#1dbf73">
            <path
              d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"
            ></path>
          </g>
        </svg>
        <div class="header__links">
          <template v-for="link in headerLinks" :key="link.id">
            <div
              class="header__links_link"
              :class="[
                link.isActive
                  ? 'header__links_active'
                  : 'header__links_inactive',
              ]"
            >
              {{ link.text }}
            </div>
          </template>
        </div>
      </div>
      <div class="header__avatar">
        <div class="header__activity"></div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IHeaderLinks } from "../../utils/interface";

export default defineComponent({
  name: "Header",
  setup() {
    onMounted(() => {
      const navLinks = document.querySelectorAll(".header__links");
      const header = document.getElementById("header");

      if (window.innerWidth > 769) {
        navLinks[0].style.display = "flex";
        if (header !== null) {
          header.style.paddingTop = "";
          header.style.paddingBottom = "";
        }
      } else {
        navLinks[0].style.display = "none";
        if (header !== null) {
          header.style.paddingTop = "20px";
          header.style.paddingBottom = "20px";
        }
      }

      window.addEventListener("resize", () => {
        if (window.innerWidth > 769) {
          // @ts-ignore
          navLinks[0].style.display = "flex";
          if (header !== null) {
            header.style.paddingTop = "";
            header.style.paddingBottom = "";
          }
        } else {
          // @ts-ignore
          navLinks[0].style.display = "none";
          if (header !== null) {
            header.style.paddingTop = "20px";
            header.style.paddingBottom = "20px";
          }
        }
      });

      return window.removeEventListener("resize", () => {
        if (window.innerWidth > 769) {
          // @ts-ignore
          navLinks[0].style.display = "flex";
          if (header !== null) {
            header.style.paddingTop = "";
            header.style.paddingBottom = "";
          }
        } else {
          // @ts-ignore
          navLinks[0].style.display = "none";
          if (header !== null) {
            header.style.paddingTop = "20px";
            header.style.paddingBottom = "20px";
          }
        }
      });
    });

    const headerLinks = ref<IHeaderLinks[]>([
      {
        id: 1,
        text: "Dashboard",
        isActive: false,
      },
      {
        id: 2,
        text: "Messages",
        isActive: false,
      },
      {
        id: 3,
        text: "Orders",
        isActive: true,
      },
      {
        id: 4,
        text: "Gigs",
        isActive: false,
      },
      {
        id: 5,
        text: "Analytics",
        isActive: false,
      },
      {
        id: 6,
        text: "Earnings",
        isActive: false,
      },
    ]);

    return {
      headerLinks,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 0 16px;
  -webkit-box-shadow: 0px 5px 41px -35px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 5px 41px -35px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 5px 41px -35px rgba(0, 0, 0, 0.26);
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__info {
    display: flex;
    align-items: center;
  }
  &__links {
    display: flex;
    align-items: center;
    padding-left: 50px;
    &_link {
      font-size: 16px;
      margin-right: 40px;
      padding: 30px 0;
      text-decoration: none;
      color: #97989c;
      font-size: 16px;
      cursor: pointer;
    }
    &_inactive {
      color: #97989c;
    }
    &_active {
      color: #2ab875;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.5px;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        background: #2ab875;
      }
    }
  }
  &__avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: url("../../assets/img/avatar.jpeg") center / cover no-repeat;
    position: relative;
  }
  &__activity {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0;
    right: -6px;
    border-radius: 50%;
    background: #2ab875;
    border: 3px solid white;
  }
}
</style>