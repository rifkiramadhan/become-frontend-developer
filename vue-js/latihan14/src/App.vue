<template>
  <div id="app">
    <h2>What I do Today ?</h2>
    <div class="pekerjaan-rumah">
      <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="tugas">
        <p>{{ tugasSaya.namaTugas }}</p>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      tugas: [
        {
          id: 1,
          namaTugas: "Membersihkan Toilet"
        }
      ]
    };
  },
  components: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
