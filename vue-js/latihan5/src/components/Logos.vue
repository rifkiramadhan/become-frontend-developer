<template>
    <div class="logos-wrapper">
        <h2 class="title-header">Find Best Logos</h2>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/1.png">
        </div>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/2.png">
        </div>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/3.png">
        </div>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/4.png">
        </div>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/5.png">
        </div>
        <div class="item-logos">
            <img class="logo" alt="Vue logo" src="../assets/6.png">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Logos'

}
</script>

<style scoped>
.title-header {
    margin-bottom: 80px;
}

.logos-wrapper {
    width: 70%;
    overflow: hidden;
    margin: auto;
}

.item-logos {
    float: left;
    width: 150px;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 150px;
}

.item-logos .logo {
    width: 150px;
    height: 150px;
}
</style>