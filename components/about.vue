<template>
    <section class="view_container">
        <div class="r_container">
            <div class="r_title_box">
                <h2 class="r_title" v-html="about.title">{</h2>
            </div>
            <div class="about_wrapper">
                <p>{{about.desc}}</p>
            </div>

            <div class="about_widget_wrapper">
                <div class="item_">
                    <div class="content_">
                        <h4>{{about.mission[0]}}</h4>
                        <p>{{about.mission[1]}}</p>
                    </div>
                </div>
                <div class="item_">
                    <div class="content_">
                        <h4>{{about.vision[0]}}</h4>
                        <p>{{about.vision[1]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      about: {
        title: '<span>About </span>Us',
        desc: 'No Matter how big or Small, Complex or Straight Forward your installation requirements in Major Fire & Electrome- chanical Works, Four loop Team is ready to meet them and you can be sure of quality workmanship, commitment and expertise each time , Every Time',
        mission: ['Our Mission', 'With a collective experience started many years back, Four Loop Electromechanical mission is to be Pre-engineered Electro-Mechanical solu- tions to provide fast response, cost savings, low maintenance cost, and longer operating life of all project conditions and requirements'],
        vision: ['Our Vision', 'We seek to become the leading company in the Middle East by executing projects in a safe, timely and quality-oriented manner, thus emerging as the most preferred solutions provider for our clients.'],
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .about_wrapper{
        position: relative;
        display: block;
        text-align: center;
        padding: 0 10vw;

        @media only screen and (max-width:1200px){
            padding: 0;
        }

        p{
            position: relative;
            margin: 0;
            @include mdText();
        }
    }

    .about_widget_wrapper{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5vw;
        margin-top: 3.5vw;

        @media only screen and (max-width:767px){
            grid-template-columns: 1fr;
            grid-gap: 5vh;
            margin-top: 3.5vh;
        }

        .item_{
            position: relative;
            display: grid;
            grid-gap: 1.5rem;
            grid-template-columns: auto 1fr;
            align-items: flex-start;
            overflow: hidden;
            border-radius: 2.5vw;
            padding: 2.5vw;
            @media only screen and (max-width:1200px){
                border-radius: 5vw;
            }

            @media only screen and (max-width:767px){
                border-radius: 10vw;
            }

            &:nth-child(1){
                @include gradient();
            }

            &:nth-child(2){
                background-color: $color-text;
            }

            .content_{
                position: relative;
                display: block;
                *{
                    color: $color-white;
                }
                h4{
                    display: block;
                    margin: 0;
                    line-height: 1.8;
                    font-weight: 800;
                    @include mdText2();
                }

                p{
                    margin: 0;
                    @include smText2();
                }
            }

        }
    }
</style>