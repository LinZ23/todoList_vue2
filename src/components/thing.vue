<template>
  <div>
    <div class="itemBanner">
        <div class="item">
            <input type="checkbox" @change="isDone(i.id)" :checked='i.done'>
            <span v-show="!i.isEdit">{{i.name}}</span>
            <input type="text" 
            :value='i.name' 
            v-show="i.isEdit" 
            @blur="updateThing(i.id,$event)" 
            ref="inputBox">
        </div>
        <button @click="editThing(i.id)" class="btn_edit" v-show="!i.isEdit">编辑</button>
        <button @click="delThing(i.id)" class="btn_del">删除</button>
    </div>
  </div>
</template>

<script>
import DetailText from "./DetailText.vue";
export default {
    name:"thing",
    props:['i','isDone','delThing'],
    components:{
        DetailText,
    },
    methods: {
        editThing(id){
            this.$bus.$emit('editThing',id)
            this.$nextTick(
                ()=>{
                    this.$refs.inputBox.focus()
                }
            )
        },
        updateThing(id,e) {
            this.$bus.$emit('updateThing',id,e.target.value)
        },
    },
}
</script>

<style scoped>
    .itemBanner{
        display: flex;
        line-height: 40px;
        width: 100%;
        margin: 3px 0;
        background-color: hwb(132 87% 11%);
        justify-content: space-between;
        box-sizing: border-box;
        opacity: 95%;
    }
    .itemBanner:hover button{
        display: block;
    }
    .itemBanner:hover{
        opacity: 100%;
    }
    .item{
        width: 80%;
    }
    button:hover{
        background-color: aliceblue;
    }
    .btn_del{
        background-color: rgb(241, 194, 194);
        display: none;
    }
    .btn_edit{
        background-color: rgb(194, 241, 225);
        display: none;
    }
</style>