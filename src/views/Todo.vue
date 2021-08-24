<template>
  <div class="about">
    <h1>This is an Todo page</h1>
    <p>Show:{{ filter }}</p>
    <p>{{ list }}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      filter: 'all'// all , active ,done
    }
  },
  computed: {
    list () {
      return this.$store.getters.filterList(this.filter)
    }
  }
}
</script>
