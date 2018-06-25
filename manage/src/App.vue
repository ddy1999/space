<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '@/components/children/header'
  import Footer from '@/components/children/footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style>
 *{
   margin:0;
   padding:0;
 }
#app{
  background:#f1f1f1;
}
</style>
