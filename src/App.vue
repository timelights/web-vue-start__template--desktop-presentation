<template>
    <div class="app">
        <Over/>
        <ViewContent/>
    </div>
</template>

<script>
import Over from "@/components/Over.vue"
import ViewContent from "@/components/View.vue"

export default {
    components: {
        Over,
        ViewContent
    }
}
</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Playfair+Display");
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

// Material Components for Web ================================================================
// Button
@import "@material/button/mdc-button";
// Elevation
@import "@material/elevation/mdc-elevation";
// Fab
@import "@material/fab/mdc-fab";
// Layout Grid
@import "@material/layout-grid/mdc-layout-grid";
// Top App Bar
@import "@material/top-app-bar/mdc-top-app-bar";
// Top Bar
@import "@material/tab-bar/mdc-tab-bar";
@import "@material/tab-scroller/mdc-tab-scroller";
@import "@material/tab-indicator/mdc-tab-indicator";
@import "@material/tab/mdc-tab";

// Material Components for Web ================================================================

$bg-color: #efefef;

html, body {
    font-family: "Roboto","Arial";
    width: 100%;
    height: 100%;
    background: $bg-color;
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6 {
    font-family: "Playfair Display", "Roboto";
    font-weight: normal;
    margin: 0;
}
.app {
    width: 100%;
    display: flex;
}
p {
    font-size: 18px;
}
</style>
