<template>
    <div>
        <input type="checkbox" onclick="" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label item" v-bind:class="{'item-completed':tugasSaya.isDone}" for="exampleCheck1">{{ tugasSaya.namaTugas }}</label>
    </div>
</template>

<script>

export default{
    name: "ItemTugas",
    props: ["tugasSaya"]
}
</script>

<style scoped>

</style>