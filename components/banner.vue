<template>
  <section class="home_banner">
    <div class="r_container">
      <div class="banner_content">
        <h1><span>{{banner.title[0]}}</span> {{banner.title[1]}}</h1>
        <p>{{banner.desc}}</p>
        <div class="btn_group">
          <button class="r_btn_primary">Know More</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      banner: {
        title: ['Welcome To', '4LOOP'],
        desc: 'Our Skill as been proven time and again through  the installation of Fire and Electromechanical System Solution Includes'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home_banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .r_container{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .banner_content{
      display: block;
      width: 30vw;
      margin-bottom: 5vw;

      h1{
        display: block;
        font-size: 3vw;
        margin: 0;

        &>span{
          color: $color-primary;
        }
        @media only screen and (max-width:1200px){
          font-size: 5vw;
        }

        @media only screen and (max-width:767px){
          font-size: 7vw;
        }
      }

      p{
        display: block;
        @include mdText();
      }
    }
  }
</style>
