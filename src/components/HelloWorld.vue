<template>
  <div class="hello">
    <div class="tabs">
      <tabs/>
    </div>
    <div class="breadcrumb block">
      <breadcrumb/>
    </div>
    <div class="cascader">
      <cascader></cascader>
    </div>
    <div class="slider">
      <slider/>
    </div>
    <div class="upload block">
      <upload/>
    </div>
    <div class="card">
      <card/>
    </div>
    <div class="tree block">
      <tree/>
    </div>
    <div class="message block">
      <message/>
    </div>
    <div class="steps block">
      <steps/>
    </div>
    <div class="collapse block">
      <collapse/>
    </div>

  </div>
</template>

<script>
import cascader from '@/components/cascader'; 
import slider from '@/components/slider'
import upload from '@/components/upload'
import tabs from '@/components/tabs'
import breadcrumb from '@/components/breadcrumb'
import card from '@/components/card'
import tree from '@/components/tree'
import message from '@/components/message'
import steps from '@/components/steps'
import collapse from '@/components/collapse'
export default {
  name: 'HelloWorld',
  components: {
    cascader, 
    slider,
    upload,
    tabs,
    breadcrumb,
    card,
    tree,
    message,
    steps,
    collapse,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.steps {
  text-align: left;
}

</style>
