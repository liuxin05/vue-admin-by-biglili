<template>
  <div class="hello">
    <Button type="error" v-clipboard="copyData">点击粘贴复制</Button>
    <Input placeholder="Enter something..." style="width: 300px" />
    <Button type="info" @click="getUEContent()">获取内容</Button>
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
    getUEContent(e){
      console.log(e)
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
