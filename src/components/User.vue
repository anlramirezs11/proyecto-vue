<template lang="pug">
  div(class="user")
    h1 User Component
    ul
      li(v-for="user in users")
        p {{user.name}} - {{user.email}} 
          button( v-on:click="deleteUser(user)") X
    form(v-on:submit.prevent="addUser")
      <input type="text" v-model="newUser.name" placeholder="Name"/>
      <input type="email" v-model="newUser.email" placeholder="Email"/>
      button( type="submit") Add
            
</template>
<script>
export default {
  data() {
    return {
      users: [],
      newUser: {}
    };
  },
  methods: {
    addUser() {
      this.users.push(this.newUser);
      this.newUser = {};
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => (this.users = res.body));
  }
};
</script>
<style lang="css">
.user {
  background: #333;
  color: #ffffff;
  padding: 20px;
}
</style>