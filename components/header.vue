<template>
    <header>
        <div class="r_container">
            <div class="nav_logo">
              <nuxt-link to="/" class="nav_logo_link">
                <nuxt-img src="/logo.svg" alt="4LOOP Electromechanical"/>
              </nuxt-link>
            </div>

            <nav class="nav_container">
              <ul class="nav_list">
                <li v-for="(nav, index) in navLinks" :key="index">
                  <a :href="nav.hash" :title="nav.name" class="nav_link">{{nav.name}}</a>
                </li>

              </ul>

              <div class="btn_wrap">
                <a href="#" class="r_btn_primary green_" title="Whatsapp Us">Whatsapp Us</a>
              </div>
            </nav>
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
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
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

  .nav_container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;

    .btn_wrap{
      display: block;
      position: relative;
      margin-left: 2vw;
    }

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
}
</style>
