<template>
  <div class="hello">
    <div class="tabs">
      <tabs/>
    </div>
    <div class="breadcrumb">
      <breadcrumb/>
    </div>
    <div class="cascader">
      <cascader></cascader>
    </div>
    <div class="slider">
      <slider/>
    </div>
    <div class="upload">
      <upload/>
    </div>
  </div>
</template>

<script>
import cascader from '@/components/cascader'; 
import slider from '@/components/slider'
import upload from '@/components/upload'
import tabs from '@/components/tabs'
import breadcrumb from '@/components/breadcrumb'
export default {
  name: 'HelloWorld',
  components: {
    cascader, 
    slider,
    upload,
    tabs,
    breadcrumb,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload {
  border: 1px solid #eff2f6;
}

.breadcrumb {
  padding: 20px;
  border: 1px solid #eff2f6;
}

</style>
