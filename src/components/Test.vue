<template lang="pug">
  h1 {{msg}}
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "Mensaje por defecto"
    }
  }
  
};
</script>
