<template>
  <div class="hello">
    <div class="cascader">
      <cascader></cascader>
    </div>
    <div class="slider">
      <slider/>
    </div>
  </div>
</template>

<script>
import cascader from '@/components/cascader'; 
import slider from '@/components/slider'
export default {
  name: 'HelloWorld',
  components: {
    cascader, 
    slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
