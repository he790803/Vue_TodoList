<template>
  <li>
    <template v-if="!edit">
      <input type="checkbox" v-model="checked"/> {{ editingTodo }}
    </template>
    <template v-else>
      <input type="input" v-model="editingTodo"/>
    </template>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    editingTodo: {
      get () {
        return this.todo.content
      },
      set (value) {
        this.$emit('edit', value)
      }
    },
    checked: {
      get () {
        return this.todo.done
      },
      set (value) {
        this.$emit('check', value)
      }
    }
  }
}
</script>
