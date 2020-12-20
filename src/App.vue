<template>
  <div id="app">
    <div id="nav">
      <h1>Origaniza tus pendientes con To Do</h1>
      <p>To do en una util herramienta para organiza y administrar tu pendientes, tareas y deberes</p>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/favorites">Favoritos</router-link>
    </div>
    <router-view/>
    
  </div>
</template>
<script>
export default {
  data:()=>({
    array:[]
  }),
  created() {
   localStorage.setItem('favoritesTask', JSON.stringify(this.array)) 

  },
}
</script>
<style>
  @font-face {
      font-family: 'GalanoGrotesque';
      src: url('./assets/fuente/GalanoGrotesque-Bold.woff') format('woff2'),
          url('./assets/fuente/GalanoGrotesque-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'HelveticaNeue';
      src: url('./assets/fuente/HelveticaNeue-Light.woff2') format('woff2'),
          url('./assets/fuente/HelveticaNeue-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  #app {
    font-family: HelveticaNeue;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
  }
  .buttonFocus:focus{
    outline: none;
  }
  h1{
    font-family: 'GalanoGrotesque';
    font-size:3rem;
  }
  #nav {
    padding: 15px  30px;
    text-align: center
  }

  #nav a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    border-bottom: solid #48249e 1px

  }

</style>
