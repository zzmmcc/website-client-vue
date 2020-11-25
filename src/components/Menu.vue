<template>
  <div>
    <ul>
      <li v-for="menu in menus">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
// export interface MenuDTO{
//   name: string
//   id: string
//   title: string
// }
export default {
  data() {
    return {
      menus: []
    }
  },
  name: "Menu",
  mounted () {
    this.$axios.get('/api/menu/all').then(
      (res) => {
        console.log(res)
        this.$data.menus = res.data
      })
    debugger
  }
}
</script>

<style scoped>

</style>
