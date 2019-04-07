<template>
    <!-- <main class="mdc-top-app-bar--fixed-adjust"> -->
    <main class="mdc-elevation--z24">
        <TabBar />
        <TabContent />
    </main>
</template>

<script>
import TabBar from "@/components/view/main/TabBar.vue"
import TabContent from "@/components/view/main/TabContent.vue"

export default {
    components: {
        TabBar,
        TabContent,
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
main {
    z-index: 10;
}
</style>
