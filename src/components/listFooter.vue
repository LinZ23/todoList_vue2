<template>
  <div>
    <div class="bottom">
      <div class="left">
      <input type="checkbox" :checked='doneTotal===todos.length' @change='checkAll(doneTotal)'>
        已完成{{doneTotal}}/全部{{todos.length}}
      </div>
      <div class="right">
        <div @click='clearList'>清除已完成任务</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'listFooter',
  props:['todos','checkAll','clearList'],
  computed:{
    doneTotal(){
      let count=0
      this.todos.forEach(i => {
        if(i.done){
          count++
        }
      });
      return count
    }
  }
};
</script>

<style scoped>
    .bottom{
        background-color: white;
        line-height: 40px;
        margin-top: 10px;
        opacity: 90%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .right:hover{
      font-size: 13px;
      cursor:pointer
    }
</style>