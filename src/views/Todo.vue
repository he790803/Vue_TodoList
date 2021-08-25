<template>
  <div class="about">
    <h1>This is an Todo page</h1>
    <div class="todo">
      <!-- replace 表示現在的紀錄會替代掉先前的歷史紀錄 -->
      <router-link to="/todo" replace>All</router-link> |
      <!-- ?為非必填 -->
      <router-link to="/todo?filter=active" replace>Active</router-link> |
      <router-link :to="{ name :'Todo', query:{ filter:'done' }}" replace>Done</router-link>
    </div>
    <!-- <p>Show:{{ filter }}</p>
    <p>{{ list }}</p> -->
    <ul class="list">
        <!-- <li v-for="item of list" :key="item.tId + ' ' +item.todo.content"
        @dblclick="editHandler(item.tId,item.todo.content)">
        <template v-if="edit !== item.tId">
          <input type="checkbox" v-model="item.todo.done"> {{ item.todo.content }}
        </template>
        <template v-else>
          <input type="input" v-model="editText">
          <button @click="editTodo">修改</button>
          <button @click="cancelHandler">X</button>
        </template>
        </li> -->
        <!-- 為了將外層的tId與內層的value同時傳給checkHandler，所以得這麼寫-->
      <TodoItem
        v-for="item of list"
        :key="item.tId + ' ' +item.todo.content"
        :todo="item.todo"
        :edit="item.tId === edit"

        @check="value => checkHandler(item.tId,value)"
        >
      </TodoItem>
    </ul>
  </div>
</template>
<script>
import TodoItem from '../components/TodoItem.vue'
export default {
  data () {
    return {
      filter: 'all', // all , active ,done
      edit: null, // 判定編輯框是否出現
      editText: ''
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_TODOS')
  },
  components: {
    TodoItem
  },
  computed: {
    list () {
      return this.$store.getters.filterList(this.filter)
    }
  },
  // watch 資料轉變後做對應的"動作"
  watch: {
    // $route: function (route) {
    //   this.filter = route.query.filter || 'all'
    // }
    $route: {
      // immediate 是否component一進來就執行
      immediate: true,
      handler: function (route) {
        this.filter = route.query.filter || 'all'
      }
    }
  },
  methods: {
    // editHandler (todo) {
    //   console.log(todo)
    // }
    checkHandler (tId, done) {
      this.$store.dispatch('CHECK_TODO', { tId, done })
    }
  }
  // methods: {
  //   editHandler (tId, content) {
  //     this.edit = tId
  //     this.editText = content
  //   },
  //   cancelHandler () {
  //     this.edit = null
  //     this.editText = ''
  //   },
  //   editTodo () {
  //     this.list.forEach(todo => {
  //       if (todo.tId === this.edit) {
  //         todo.todo.content = this.editText
  //       }
  //     })
  //     this.cancelHandler()
  //   }
  // },
}
</script>

<style scoped>
.todo a{
  color: black;
  text-decoration: none;
}
.todo .router-link-exact-active{
  color: green;
  font-weight: bolder;
}
.list li{
  list-style: none;
}
</style>
