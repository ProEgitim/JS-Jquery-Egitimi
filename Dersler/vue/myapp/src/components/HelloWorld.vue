<template>
  <div class="hello">
    <h1 :class="name" v-if="name == 'Varol'">{{ msg }} {{ name }}</h1>
    <input v-model="name" type="text">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Varol',
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
