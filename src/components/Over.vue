<template>
    <div class="over">
        <div class="content">
            <h1>Scripting Tool</h1>
            <h3>update multiple scripts at once</h3>
            <a class="mdc-button mdc-button--raised mdc-theme--secondary-bg"
                href="assets/QA Scripting Tool v20190209.zip"
            >
                <i class="material-icons mdc-button__icon">file_download</i>
                <span class="mdc-button__label">
                    Download
                </span>
            </a>
        </div>
    </div>
</template>

<script>
import {MDCRipple} from '@material/ripple';
export default {
    mounted() {
        new MDCRipple(document.querySelector('.mdc-button'))
    }
}
</script>


<style lang="scss" scoped>
$bg-image: url("assets/bg.webp");
a {
    margin-top: 20px;
    width: 150px;
}
.over {
    width: 100%;
    height: 350px;
    background: $bg-image center / cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .content {
        h1,h3 {
            margin-bottom: 10px;
        }
        h1 {
            font-family: "Playfair Display","Roboto";
            font-weight: normal;
        }
        h3 {
            font-family: "Source Sans Pro";
        }
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 50px 125px;
        margin-bottom: 20px;
    }
    position: fixed;
    z-index: 1;
}
</style>
