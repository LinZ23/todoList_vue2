<template>
  <div>
    <div class="outter">
      <div class="mainBox">
        <listHeader :addThing="addThing"></listHeader>
        <lists :todos="todos" :isDone="isDone" :delThing="delThing"></lists>
        <listFooter
          :todos="todos"
          :checkAll="checkAll"
          :clearList="clearList"
        ></listFooter>
      </div>
    </div>
    <Moment></Moment>
    <WeatherForTodoListVue/>
  </div>
</template>
<script>
import listHeader from "./components/listHeader.vue";
import lists from "./components/lists.vue";
import listFooter from "./components/listFooter.vue";
import WeatherForTodoListVue from './components/WeatherForTodoList.vue'
import Moment from './components/Moment.vue'

export default {
  name: "App",
  components: {
    listHeader,
    lists,
    listFooter,
    Moment,
    WeatherForTodoListVue,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")),
    };
  },
  methods: {
    addThing(msg) {
      this.todos.unshift(msg);
    },
    isDone(id) {
      this.todos.forEach((i) => {
        if (i.id === id) {
          i.done = !i.done;
        }
      });
    },
    delThing(id) {
      this.todos = this.todos.filter((i) => i.id !== id);
    },
    checkAll(totalDone) {
      if (totalDone === this.todos.length) {
        this.todos.forEach((i) => {
          i.done = false;
        });
      } else {
        this.todos.forEach((i) => {
          i.done = true;
        });
      }
    },
    clearList() {
      this.todos = this.todos.filter((i) => !i.done);
    },
    editThing(id){
      this.todos.forEach(
        (i)=>{
          if(i.id===id){
            if(i.hasOwnProperty('isEdit')){
              i.isEdit=true
            }else{
              this.$set(i,'isEdit',true)
            }
          }
        }
      )
    },
    updateThing(id,value){
      this.todos.forEach(
        (i)=>{
          if(i.id===id){
            i.name=value
            i.isEdit=false
          }
        }
      )
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
    },
  },
  mounted() {
    this.$bus.$on('editThing',this.editThing)
      this.$bus.$on('updateThing',this.updateThing)
  },
};
</script>
<style>
.outter{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(./assets/bg1.jpg);
  background-size: cover;
  overflow: hidden;
}
.mainBox {
  opacity: 95%;
  margin: 100px auto;
  width: 450px;
  background-color: rgb(255, 253, 253);
  background-size: cover;
  border: 2px solid rgb(9, 6, 6);
  padding: 10px;
  overflow: hidden;
}
</style>

