<template>
  <div class="hello">
    <h1>{{ getTest }}</h1>
    <el-button round @click="setTest">圆形按钮</el-button>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Button, DatePicker } from 'element-ui'
export default {
  name: 'HelloWorld',
  components: {
    'el-button': Button,
    'el-date-picker': DatePicker
  },
  data () {
    return {
      msg: 'Welcome Hello',
      value1: ''
    }
  },
  computed: {
    ...mapGetters([
      'getTest'
    ])
  },
  methods: {
    ...mapActions({
      setTest: 'TEST_MUTATION'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #fff;
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
