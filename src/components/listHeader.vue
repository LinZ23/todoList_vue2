<template>
  <div>
    <div class="banner">
      <input type="text" placeholder="请输入待办事项" v-model="msg" @keyup.enter="inputThing" />
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "listHeader",
  data() {
    return {
      msg: "",
    };
  },
  props: ["addThing"],
  computed: {
    msgBox(){
      return {
        id:nanoid(),
        name:this.msg,
        done:false
      }
    }
  },
  methods:{
    inputThing(){
      this.addThing(this.msgBox)
      this.msg=''
    }
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
  line-height: 40px;
  margin-bottom: 10px;
  opacity: 70%;
}
input {
  width: 100%;
  line-height: 30px;
  box-sizing: border-box;
}
</style>