<template>
    <div class="my-tab-content">
        <h1 id="overview">Overview</h1>
        <OverviewContent />
        <h1 id="features">Features</h1>
        <FeaturesContent />
        <h1 id="details">Details</h1>
        <DetailsContent />
    </div>
</template>

<script>
import OverviewContent from '@/components/view/Main/TabContent/OverviewContent.vue'
import FeaturesContent from '@/components/view/Main/TabContent/FeaturesContent.vue'
import DetailsContent from '@/components/view/Main/TabContent/DetailsContent.vue'

export default {
    components: {
        OverviewContent,
        FeaturesContent,
        DetailsContent
    }
}
</script>

<style lang="scss">
h3 {
    margin: 0;
}
.my-tab-content {
    padding: 50px 130px;

    p {
        font-family: "Source Sans Pro", "Roboto", "Arial";
        margin: 0;
    }
}
</style>
