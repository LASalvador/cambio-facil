<template>
  <div class="container">
    <h1 class="header">Cambio Fácil</h1>
    <div class="main">
      <label for="dolar"> US$ </label>
      <input 
        id="dolar" 
        type="number" 
        min="0"
        v-model="dolar"
      >
      <button
        @click="converter"
      >
          Converter
      </button>
    </div>
    <span class="result">Vale R$ {{real}}</span>
  </div>
</template>

<script>
import api from './services/api'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      real: 0,
      dolar: 0,
      dolarBase: 5.08
    }
  },
  methods: {
    converter() {
      api.converter('USD', 'BRL')
        .then(response => {
          this.dolarBase = response.data.result
          this.real = this.dolar * this.dolarBase
        })
    }
  }
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'to to to to to to'
    'from from from from from from';
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
}
.header {
   grid-area: header;
   color:darkorchid;
}
.main {
   grid-area: to;
}
.main button {
  background-color:darkorchid;
  color: white;
}
.result {
  grid-area: from;
  font-size:2em;
  color:darkorchid;
}
</style>
