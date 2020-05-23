<template lang="pug">
  div(class="hello")
    h1 Usando vue-router y vue-resource
    nav
      ul
        li
          router-link(to="/test") Test
        li
          router-link(to="/") User
    router-view
</template>

<script>
import Test from "./components/Test"
import User from "./components/User"

export default {
  name: "App",
  components: {
    Test,
    User
  }
}
</script>

<style lang="css" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>

