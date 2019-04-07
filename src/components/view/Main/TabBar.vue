<template>
    <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">
                    <button id="t1" @click="scrollToView('overview')" class="mdc-tab mdc-tab--active">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__icon material-icons" aria-hidden="true">web_asset</span>
                            <span class="mdc-tab__text-label">Overview</span>
                        </span>
                        <span id="ta" class="mdc-tab-indicator mdc-tab-indicator--active">
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                    <button id="t2" @click="scrollToView('features')" class="mdc-tab">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__icon material-icons">flash_on</span>
                            <span class="mdc-tab__text-label">Features</span>
                        </span>
                        <span id="tb" class="mdc-tab-indicator">
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                    <button id="t3" @click="scrollToView('details')" class="mdc-tab">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__icon material-icons">web</span>
                            <span class="mdc-tab__text-label">Details</span>
                        </span>
                        <span id="tc" class="mdc-tab-indicator">
                            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                        <span class="mdc-tab__ripple"></span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Fixed Position -->
        <!-- Download (fab) button | TabBar.vue -->
        <a href="download/QA Scripting Tool v20190209.zip" id="fab-download" class="mdc-fab" aria-label="Favorite">
            <span class="mdc-fab__icon material-icons">file_download</span>
        </a>
    </div>
</template>

<script>
import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';

export default {
    mounted() {
        const fabDownload = document.getElementById('fab-download')
        new MDCRipple(fabDownload)

        const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        const parent_window = document.querySelector(".view")
        const sticky_header = document.querySelector('.mdc-tab-bar')
        const sticky = sticky_header.offsetTop

        const overview_head = document.getElementById("overview")
        const features_head = document.getElementById("features")
        const details_head = document.getElementById("details")

        const oh = overview_head.offsetTop
        const fh = features_head.offsetTop
        const dh = details_head.offsetTop

        // Add sticky class
        window.onscroll = function () {
            // Sticky Tab Bar
            if (window.pageYOffset > sticky) {
                sticky_header.classList.add("sticky");
                sticky_header.classList.add("mdc-elevation--z3");
                fabDownload.classList.add("is-visible")
            } else {
                sticky_header.classList.remove("sticky");
                sticky_header.classList.remove("mdc-elevation--z3");
                fabDownload.classList.remove("is-visible")
            }
            // Change Active Tab 
            if (window.pageYOffset < oh) {
                document.getElementById("ta").classList.add('mdc-tab-indicator--active')
                document.getElementById("tb").classList.remove('mdc-tab-indicator--active')
                document.getElementById("tc").classList.remove('mdc-tab-indicator--active')

                document.getElementById("t1").classList.add('mdc-tab--active')
                document.getElementById("t2").classList.remove('mdc-tab--active')
                document.getElementById("t3").classList.remove('mdc-tab--active')
            } else if (window.pageYOffset < fh) {
                document.getElementById("ta").classList.remove('mdc-tab-indicator--active')
                document.getElementById("tb").classList.add('mdc-tab-indicator--active')
                document.getElementById("tc").classList.remove('mdc-tab-indicator--active')

                document.getElementById("t1").classList.remove('mdc-tab--active')
                document.getElementById("t2").classList.add('mdc-tab--active')
                document.getElementById("t3").classList.remove('mdc-tab--active')
            } else if (window.pageYOffset < dh) {
                document.getElementById("ta").classList.remove('mdc-tab-indicator--active')
                document.getElementById("tb").classList.remove('mdc-tab-indicator--active')
                document.getElementById("tc").classList.add('mdc-tab-indicator--active')

                document.getElementById("t1").classList.remove('mdc-tab--active')
                document.getElementById("t2").classList.remove('mdc-tab--active')
                document.getElementById("t3").classList.add('mdc-tab--active')
            }
        }
    },
    methods: {
        scrollToView(section) {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth', block: 'center'})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@material/theme/variables";
@import "@material/ripple/mixins";

.mdc-tab-scroller {
    width: 470px!important;
}
.sticky {
    position: fixed;
    top: 0;
    background: $mdc-theme-primary;
    .material-icons, .mdc-tab__text-label {
        color: #fff!important;
    }
    .mdc-tab-indicator--active .mdc-tab-indicator__content--underline {
        background-color: #fff!important;
    }
    .mdc-tab__ripple {
        @include mdc-states(#fff);
    }
}

.mdc-fab {
    position: fixed;
    bottom: 35px;
    right: 35px;
    transition: 0.3s;
    transform: scale(0);
    &.is-visible {
        transform: scale(1)
    }
}
</style>
