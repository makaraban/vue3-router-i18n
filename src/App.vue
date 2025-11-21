<script>
  import Info from '@/components/Info.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    components: {
      Info,
      Footer
    }
  }
</script>

<template>
  <!-- router view -->
  <router-view/>
  <!-- end router view -->

  <!-- info section -->
  <Info/>
  <!-- end info section -->

  <!-- footer section -->
  <Footer/>
  <!-- footer section -->
</template>

<style>
* {
  font-family: "Roboto", "Kantumruy Pro", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
