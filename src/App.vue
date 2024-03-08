<template>
  <hello-world></hello-world>
  <p class="box">{{ count }}</p>
  {{ obj.name }}
</template>
<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
const store = useStore()
const count = computed(()=>store.state.count)

const obj = reactive({
  name:'abc'
})
</script>
<style lang="scss">
.box{
  width:100px;
  color:$themeColor;
}
</style>
