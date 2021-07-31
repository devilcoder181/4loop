<template>
    <header>
        <div class="r_container">
            <div class="nav_logo">
              <!-- <nuxt-link to="/" class="nav_logo_link">
                <nuxt-img src="/logo.svg" alt="4LOOP Electromechanical"/>
              </nuxt-link> -->
            </div>

            <div class="nav_group">
              <transition name="headanim">
                <UiNav  :navItem="navLinks" v-if="showMenu" @toggleClose="openMenu"></UiNav>
              </transition>

              <div class="btn_wrap">
                <a href="#" class="r_btn_primary green_" title="Whatsapp Us">Whatsapp Us</a>
              </div>

              <div class="btn_wrap" v-if="!this.$userAgent.agent()">
                <button class="toggler_">
                  <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="60" @click="openMenu" :class="{'active': showMenu}">
                    <path
                          class="line top"
                          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                    <path
                          class="line middle"
                          d="m 30,50 h 40" />
                    <path
                          class="line bottom"
                          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                  </svg>
                </button>
              </div>
            </div>
        </div>
    </header>
</template>

<script>
  export  default {
    data() {
      return {
        navLinks : [
          {hash: '#home', name: 'Home'},
          {hash: '#about', name: 'About Us'},
          {hash: '#services', name: 'Services'},
          {hash: '#assistance', name: 'Assistance'},
          {hash: '#contact', name: 'Contact'},
        ],
        showMenu: true
      }
    },
    methods: {
      openMenu() {
        this.showMenu = !this.showMenu
      },
    },
    mounted() {
      if(this.$userAgent.agent()) {
        this.showMenu = true
      }else{
        this.showMenu = false
      }
    }
  }
</script>

<style lang="scss">
header{
  position: relative;
  width: 100%;
  display: block;
  height: 12.5vh;
  padding: 1.5rem 0;

  .r_container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .nav_group{
    position: relative;
    display: flex;
    align-items: center;

    .btn_wrap{
      display: block;
      position: relative;
      margin-left: 2vw;
    }
  }

  .nav_container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    .nav_list{
      position: relative;
      display: flex;
      align-items: center;
      margin: 0 -1rem;

      li{
        position: relative;
        display: block;
        margin: 0 1rem;

        .nav_link{
          position: relative;
          font-size: 1vw;
          font-weight: 600;
          transition: all 0.3s ease;

          &:hover, &:focus{
            color: $color-primary;
          }
        }
      }
    }

  }

  .toggler_{
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    outline: none;
  }

  .nav_logo{
    position: relative;
    display: block;
    width: auto;
    height: 100%;

    .nav_logo_link{
      position: relative;
      display: block;
      width: auto;
      height: 100%;

      img{
        display: block;
        position: relative;
        width: auto;
        height: 100%;
      }
    }
  }

  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .line {
      fill:none;
      transition: all 400ms ease, all 400ms ease;
      stroke:#000;
      stroke-width:5.5;
      stroke-linecap:round;

    }

  }

  .hamRotate.active {
    transform: rotate(45deg);

    .line{
      stroke: #fff;
    }
  }

 

  .ham8 .top {
  stroke-dasharray: 40 160;
  }
  .ham8 .middle {
    stroke-dasharray: 40 142;
    transform-origin: 50%;
    transition: transform 400ms;
  }
  .ham8 .bottom {
    stroke-dasharray: 40 85;
    transform-origin: 50%;
    transition: all 400ms ease, all 400ms ease;
  }
  .ham8.active .top {
    stroke-dashoffset: -64px;
  }
  .ham8.active .middle {
    //stroke-dashoffset: -20px;
    transform: rotate(90deg);
  }
  .ham8.active .bottom {
    stroke-dashoffset: -64px;
  }
}
</style>
