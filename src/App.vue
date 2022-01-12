<template>
  <div class="app">
    <Header />
    <v-app>
      <router-view />
    </v-app>
    <Footer />
  </div>
</template>

<style >
</style>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  h1 {
    color: #F27E02;
    font-size: 40px;
  }

  p {
    color: #939393;
  }
</style>
