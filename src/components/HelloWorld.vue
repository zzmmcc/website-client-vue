<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button @click="token">获取token</el-button>
    <el-button @click="reToken" type="primary">重新生成token</el-button>
    <el-button @click="clearToken" type="text">清除token</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    token(){
      // let token = new TokenService();
      // let promise = token.generatorToken("zhangsan", "123456")
      this.$axios.post("/api/token", {"account": "zhangsan", "password": "123456"})
        .then((res) => localStorage.setItem('token', res.data.token));
    },
    reToken(){
      this.$axios.get("/api/token").then((res) => localStorage.setItem('token', res.data.token));
    },
    clearToken(){
      localStorage.setItem('token', null)
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
