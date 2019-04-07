<template>
    <div class="view">
        <!-- <header class="mdc-top-app-bar">
            <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <a href="" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
                    <span class="mdc-top-app-bar__title">
                        Title
                    </span>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                    <a href="assets/QA Scripting Tool v20190209.zip" class="material-icons mdc-top-app-bar__action-item">file_download</a>
                    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Print this page">print</a>
                    <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page">bookmark</a>
                </section>
            </div>
        </header> -->
        
        <MainContent/>
    </div>
</template>

<script>
import MainContent from '@/components/view/Main.vue'
// import {MDCTopAppBar} from '@material/top-app-bar/index';
export default {
    components: {
        MainContent
    },
    mounted() {
        // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        // const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
}
</script>

<style lang="scss" scoped>
@import "@material/ripple/mixins";
$bg-color: #efefef;
.mdc-top-app-bar {
    background: transparent;
    .material-icons {
        color: #333;
    }
    .mdc-top-app-bar__action-item {
        @include mdc-states(orange);
    }
}
.mdc-top-app-bar__title {
    font-family: "Playfair Display", "Roboto";
    font-weight: normal;
}
.view {
    background: $bg-color;
    z-index: 2;
    margin-top: 350px;
    display: flex;

    .mdc-top-app-bar__navigation-icon {
        display: none;
    }
    height: 100%;
}
</style>

