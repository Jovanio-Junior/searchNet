<template>
  <div>
    <!-- titulo e logo -->
    <Title />
    <!-- menu -->
    <Navbar />
    <!-- corpo -->

    <router-view />

    <!-- footer -->
    <Footer class="mtoop"/>
  </div>
</template>

<script>
import Title from './components/template/title.vue'
import Navbar from './components/template/navbar.vue'
import Footer from './components/template/footer.vue'
export default {
  components: {
    Title,
    Navbar,
    Footer,
  },
  name: 'App'
}
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
.mtoop {
    margin-top: 85px;
}
</style>
