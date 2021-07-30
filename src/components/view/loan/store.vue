<template>
  <div class="container">
    <p class='back' @click="$router.push('/loan')" >
        &lt;返回
    </p>
    <topComponent :showBackground = 'false'></topComponent>
    <div class="recommendPage">
        <!--利用swiper插件实现轮波图效果-->
        <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
            <img  src="../../../assets/img/loanBanner1.jpg" >
        </swiper-slide>
        <swiper-slide>
            <img  src="../../../assets/img/loanBanner2.jpg" >
        </swiper-slide>
        <swiper-slide>
            <img  src="../../../assets/img/loanBanner3.jpg" >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    <div class="tablePage">
      <div class="buttonList">
        <button @click = 'getButtonUp' :class= 'buttonFirst'>查看表格</button>
        <button @click = 'getButtonDown' :class= 'buttonSecond'>收起表格</button>
        <button @click = 'getButtonLook' :class= 'buttonThird'>查看提示</button>
        <button @click = 'getButtonWrite' :class= 'buttonFourth'>填写信息</button>
      </div>
      <div :class="['tableList' , tableFlag===true?'show':'unshow']">
        <table>
          <caption ><b>公司经营状况</b></caption>
          <!--表格主体-->
          <tbody>
            <tr>
              <th scope='col'>月份</th>
              <th scope='col'>去年营收额</th>
              <th scope='col'>今年营收额</th>
              <th scope='col'>同比增长率</th>
              <th scope='col'>净利润</th>
            </tr>
            <tr>
              <th> 一月 </th>
              <td>40688</td>
              <td>38000</td>
              <td>-6.61%</td>
              <td>-2688</td>
            </tr>
            <tr>
              <th> 二月 </th>
              <td>11991</td>
              <td>15500</td>
              <td>29.26%</td>
              <td>3509</td>
            </tr>
            <tr>
              <th> 三月 </th>
              <td>22179</td>
              <td>25000</td>
              <td>12.72%</td>
              <td>2821</td>
            </tr>
            <tr>
              <th> 四月 </th>
              <td>31317</td>
              <td>30000</td>
              <td>-4.21%</td>
              <td>-1317</td>
            </tr>
            <tr>
              <th> 五月 </th>
              <td>35369</td>
              <td>40000</td>
              <td>13.09%</td>
              <td>4631</td>
            </tr>
            <tr>
              <th> 六月 </th>
              <td>37588</td>
              <td>30000</td>
              <td>-20.19%</td>
              <td>-7588</td>
            </tr>
            <tr>
              <th> 七月 </th>
              <td>50308</td>
              <td>68000</td>
              <td>35.90%</td>
              <td>17962</td>
            </tr>
            <tr>
              <th> 八月 </th>
              <td>30918</td>
              <td>29000</td>
              <td>-6.20%</td>
              <td>-1918</td>
            </tr>
            <tr>
              <th> 九月 </th>
              <td>40711</td>
              <td>53000</td>
              <td>30.19%</td>
              <td>12289</td>
            </tr>
            <tr>
              <th> 十月 </th>
              <td>21189</td>
              <td>22000</td>
              <td>3.83%</td>
              <td>811</td>
            </tr>
            <tr>
              <th> 十一月 </th>
              <td>21118</td>
              <td>24000</td>
              <td>13.65%</td>
              <td>2882</td>
            </tr>
            <tr>
              <th> 十二月 </th>
              <td>27929</td>
              <td>29000</td>
              <td>3.83%</td>
              <td>1071</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--设置气泡下的三角形-->
      <div class=assistWindow>
        <ul :class="['income', 'clearfix', assistFlag===true?'show':'unshow']">
          <li>总收入：371305</li>
          <li>平均收入：30942</li>
          <li>总利润：32465</li>
          <li>平均利润：2705</li>
          <li>平均增长率：8.74%</li>
          <li>利润率最高月：七月</li>
          <li>净利润最高月：七月</li>
          <li>利润率最低月：六月</li>
          <li>净利润最低月：六月</li>
        </ul>
      </div>
    </div>
    <footComponent :idx='0'></footComponent>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      tableFlag: false,
      assistFlag: false,
      buttonFirst: '',
      buttonSecond: '',
      buttonThird: '',
      buttonFourth: '',
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          // 允许分页点击跳转
          clickable: true
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    getButtonUp () {
      this.tableFlag = true
      this.assistFlag = false
      this.buttonFirst = 'buttonStyle'
      this.buttonSecond = ''
      this.buttonThird = ''
      this.buttonFourth = ''
    },
    getButtonDown () {
      this.tableFlag = false
      this.assistFlag = false
      this.buttonFirst = ''
      this.buttonSecond = 'buttonStyle'
      this.buttonThird = ''
      this.buttonFourth = ''
    },
    getButtonLook () {
      this.tableFlag = true
      this.assistFlag = true
      this.buttonFirst = 'buttonStyle'
      this.buttonSecond = ''
      this.buttonThird = 'buttonStyle'
      this.buttonFourth = ''
    },
    getButtonWrite () {
      this.tableFlag = false
      this.assistFlag = false
      this.buttonFirst = ''
      this.buttonSecond = ''
      this.buttonThird = ''
      this.buttonFourth = 'buttonStyle'
      this.$router.push('/borrow')
    }

  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  }
}
</script>
<style scoped >
    /* 从swiper中找到对应位置，对箭头进行修改 */
    .swiper-button-prev {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
    .swiper-button-next{
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
    .swiper-button-prev,.swiper-button-next{
      width: 1rem;
      height: 3rem;
      background-color: darkgray;
      opacity: 0.3;
      border-radius: 15%;
      top: 4.3rem;
    }
    .swiper-button-prev:hover,.swiper-button-next:hover{
      opacity: 0.8;
      transform: scale(1.2,1.2);
    }
    .recommendPage .swiper-container{
      position: relative;
      margin-top: -5rem;
      width: 100%;
      height: 348px;
      background: pink;
    }
    .recommendPage .swiper-container .swiper-slide{
      width: 100%;
      line-height: 200px;
      background: yellowgreen;
      color: #000;
      font-size: 16px;
      text-align: center;
    }
    .tablePage{
      position: relative;
      background-color: aliceblue;
      height: 14rem;
      width: 100%;
    }
    .tablePage .buttonList{
      width: 100%;
    }
    .tablePage .buttonList .buttonStyle{
      color: aquamarine;
      background-color: blueviolet;
    }
    .tablePage .buttonList button{
      margin-left: 1.4rem;
      border-radius: 10%;
      width: 3rem;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.5rem ;
      transition: 0.3s;
    }
    .tablePage .buttonList button:hover{
      cursor: pointer;
      color:red;
      transform:scale(1.05, 1.05);
    }
    .tablePage .tableList{
      height: 13rem;
      width: 100%;
      /* background-color: yellow; */
      font-size: 0.6rem;
      padding-left: 2rem;
      padding-top: 0.2rem;
    }
    .tablePage .show{
      display: block;
    }
    .tablePage .unshow{
      display: none;
    }
    .tablePage .tableList th,td{
      padding-left: 0.5rem;
      text-align: center;
      border: 1px solid #000;
    }
    .tablePage .tableList table{
      border-collapse: collapse;
    }
    .assistWindow{
      /* position：absolute; */
      height: 5rem;
      width: 100%;
      z-index:5

    }
    .assistWindow .income {
      background: #2B2B2B;
      border-radius: 5px 5px;
      padding: .5em 0 0 .9375em;
      position: absolute;
      font-size: 0.8rem;
      color: cornsilk;
      width: 240px;
      top: 2.1rem;
      left: 8rem;
      opacity: 0.8;
      transition: 0.3s;
      }
      /* 气泡下的三角形 */
    .assistWindow .income:after {
      content:"";
      display:block;
      width:0px;
      height:0px;
      border:10px solid transparent;
      border-bottom:10px solid #2B2B2B;
      position:relative;
      bottom: 11.1rem;
      border-width: 18px;
      left:40%;
    }

    .assistWindow .income:hover{
      transform:scale(1.05,1.05);
      opacity:1;
      cursor: pointer;
    }

</style>
