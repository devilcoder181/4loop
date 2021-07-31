<template>
    <nav class="nav_container">
        <ul class="nav_list">
            <li v-for="(nav, index) in navItem" :key="index">
                <a :href="nav.hash"  :title="nav.name" class="nav_link" @click="closeNav()">{{nav.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        navItem: {
            type: Array
        }
    },
    methods: {
        closeNav() {
            if(!this.$userAgent.agent()) {
                this.$emit('toggleClose')
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    @media only screen and (max-width:1200px) {
        .nav_container{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            &:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: $color-primary;
                transform-origin: left;
                background: linear-gradient(38deg, $color-primary 0%, $color-secondary);
            }

            .nav_list{
                width: 100%;
                flex-direction: column;
                align-items: flex-start;

                .nav_link{
                    padding: 0.5em 0;
                    color: $color-white;
                    font-size: 7vw;
                    display: block;
                }
            }


            &.headanim-enter {
                &:before{
                    transform: scaleX(0);
                }
                .nav_list{
                    li{
                        transform: translateY(100%);
                        opacity: 0;
                    }
                }
            }

            &.headanim-enter-active {
                transition-delay: 2s;
                &:before{
                    transition: all 1s ease;
                }
                .nav_list{
                    li{
                        transition: all 0.8s ease;
                        @for $i from 1 through 8 {
                            &:nth-child(#{$i}) {
                                transition-delay: #{$i*0.1s + 0.3s};
                            }
                        }
                    }
                }
            }

            &.headanim-leave-active {
                transition-delay: 1.5s;
                &:before{
                    transition: all 0.8s ease 0.3s;
                }
                .nav_list{
                    li{
                        transition: all 1s ease 0s;
                    }
                }
            }

            &.headanim-leave-to {
                &:before{
                    transform: scaleX(0);
                    transform-origin: left;
                }
                .nav_list{
                    li{
                        transform: translateY(100%);
                        opacity: 0;
                    }
                }
            }
        }   
    }
</style>

