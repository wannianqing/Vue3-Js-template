<template>
  <div>
    <div class="button-group">
      <button @click="tab(ChildOne)">组件1</button>
      <button @click="tab(ChildTwo)">组件2</button>
      <button @click="tab(ChildThree)">组件3</button>
    </div>
    <component :is="view"></component>
  </div>
</template>
<script setup>
import ChildOne from './components/ChildOne.vue';
import ChildTwo from './components/ChildTwo.vue';
import ChildThree from './components/ChildThree.vue';
defineOptions({name:'App'})

const view = shallowRef(ChildOne)
const tab = (t)=> {
  view.value = t
}

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
