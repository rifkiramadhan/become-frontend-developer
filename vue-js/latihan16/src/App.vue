<template>
  <div id="app">
    <div class="container">
      <div class="row header mb-5 p-3">
        <div class="col-lg-12">
          <h2>What I do Today ?</h2>
        </div>
      </div>

      <div class="row content">
        <div class="col-lg-12">
          <div class="pekerjaan-rumah">

            <div class="row">
              <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="mb-4 tugas col-lg-12 text-left">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label item" for="exampleCheck1">{{ tugasSaya.namaTugas }}</label>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'App',
  data: function() {
    return {
      tugas: [
        {
          id: 1,
          namaTugas: "Membersihkan Toilet",
          isDone: false
        },
        {
          id: 2,
          namaTugas: "Makan Dbesto",
          isDone: false
        },
        {
          id: 3,
          namaTugas: "GYM Fit",
          isDone: false
        },
        {
          id: 4,
          namaTugas: "Istirahat 8 Jam",
          isDone: false
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
.header {
  background: #1abc9c;
}
.header h2 {
  margin: 0;
}
.tugas .item {
  font-size: 20px;
}
</style>
