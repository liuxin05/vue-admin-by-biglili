<template>
  <div class="hello">
    <Button type="error" v-clipboard="copyData">点击粘贴复制</Button>
    <Input placeholder="Enter something..." style="width: 300px" />
    <Button type="info" @click="getUEContent()">获取内容</Button>
    <div class="qrcode" ref="qrCodeUrl"></div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      copyData: "www.baidu.com",
      msg: "https://xkeshi.github.io/vue-qrcode"
    };
  },
  mounted() {
    this.creatQrCode();
    console.log(_.defaults({ a: 1 }, { a: 3, b: 2 }));
  },
  methods: {
    getUEContent(e) {
      console.log(e);
    },
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: "https://www.npmjs.com/package/jr-qrcode",
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
};
</script>

<style scoped>
</style>
