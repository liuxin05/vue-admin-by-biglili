<template>
  <div class="hello">
    <Button type="error" v-clipboard="copyData">点击粘贴复制</Button>
    <Input placeholder="Enter something..." style="width: 300px" />
    <button @click="getUEContent()">获取内容</button>
  </div>
</template>

<script>
// 1、引入VueUeditorWrap组件

export default {
  name: 'HelloWorld',
  components: {
    
  },
  data () {
    return {
      copyData: 'www.baidu.com',
    }
  },
  methods: {
    hahaha(e){
      console.log(e)
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
