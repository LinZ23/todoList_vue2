<template>
  <div class="moment">
    <div class="time">
        {{ tim }}
    </div>
    <div class="text">
        {{momentText}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tim: "",
      hour:''
    };
  },
  mounted() {
    setInterval(() => {
      this.tim = this.$moment(this.createTime).format("YYYY-MM-DD HH:mm:ss");
      this.hour=this.tim.substring(11,13)
    }, 1000);
  },
  computed:{
    momentText(){
        if(this.hour>12&&this.hour<18){
            return '下午了~~'
        }else if(this.hour>6&&this.hour<12){
            return '上午好，打起精神吧~'
        }else if(this.hour==12){
            return '睡个午觉吧。'
        }else if(this.hour>18){
            return '到家了，好耶！'
        }
    }
  }
};
</script>

<style scoped>
.moment {
  position: absolute;
  color: aliceblue;
}
.time{ 
  font-size: 15px;
}
.text{
    font-size: 20px;
    margin: 20px 15px;
}
</style>