<template>
  <div>
    <div class="weatherBox">
        <div class="weatherText">
            <div class="city">
                广州
            </div>
            现在的天气：{{weatherText}}
        </div>
        <div class="windState">
            <div class="windDir">
                吹着{{windState.windDir}} ~~
            </div>
            <div class="windStatus">
                {{windState.windScale}}级风力
                {{windState.windSpeed}}级风速
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'WeatherForTodoList',
    data() {
        return {
            weatherText:'',
            temperature:'',
            windState:{
                windDir:'',
                windSpeed:'',
                windScale:'',
            }
        }
    },
    mounted() {
        axios.get('https://devapi.qweather.com/v7/weather/now?location=101280101&key=4d6a812ee3d140aaa50bf93a3f60f43e').then(
            response=>{
                console.log(response.data)
                this.weatherText=response.data.now.text
                this.temperature=response.data.now.temp
                this.windState.windDir=response.data.now.windDir
                this.windState.windSpeed=response.data.now.windSpeed
                this.windState.windScale=response.data.now.windScale
            },
            err=>{
                console.log(err.message)
            }
        )
    },
}
</script>

<style scoped>
    .weatherBox{
        height: 200px;
        padding: 23px;
        position: absolute;
        top: 110px;
        color: white;
        margin-left: 15px;
        background-color: rgb(156, 107, 107,.5);
        backdrop-filter: blur(2px);
    }
    .weatherText{
        margin-top: 20px;
        margin-left: 5px;
    }
    .windState{
        margin-top: 10px;
        margin-left: 5px;
    }
    .windStatus{
        margin-top:5px ;
    }
    div.city{
        margin-bottom: 12px;
        font-size: 20px;
        font-weight: bold;
    }
</style>