<template>
<div class="container">
    <p class='back' @click="$router.push('/loan')" >
        &lt;返回
    </p>
    <div class = "loanBanner">
        <p>
            <span class = 'tit'>
                草根金融
            </span>
        </p>
    </div>
    <!-- <li class = 'iconfont icon-faxian-29'></li> -->
    <div class = 'creditWrite'>
      <li v-for = 'item in items' :key = 'item' :class=item.className @click = '$router.push(item.cls)'>
          <span><b>{{item.inputName}}</b></span>
      </li>
    </div>
    <footComponent :idx='1'></footComponent>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      items: [{
        className: 'iconfont icon-faxian-29',
        inputName: '个人菜单',
        cls: '/user'
      },
      {
        className: 'iconfont icon-saoma',
        inputName: '个人认证',
        cls: '/borrow'
      },
      {
        className: 'iconfont icon-shezhi',
        inputName: '个人设置',
        cls: '/user'
      },
      {
        className: 'iconfont icon-shenhe',
        inputName: '填写信息',
        cls: '/borrow'
      },
      {
        className: 'iconfont icon-shoucang',
        inputName: '个人收藏',
        cls: '/store'
      },
      {
        className: 'iconfont icon-tongzhi',
        inputName: '银行列表',
        cls: '/transfer'
      },
      {
        className: 'iconfont icon-wode',
        inputName: '我的主页',
        cls: '/loan'
      },
      {
        className: 'iconfont icon-xinxi',
        inputName: '我的信息',
        cls: '/user'
      },
      {
        className: 'iconfont icon-yinhangka',
        inputName: '我的银行',
        cls: '/bank?auditID=中国银行'
      },
      {
        className: 'iconfont icon-youhuiquan',
        inputName: '营收状况',
        cls: '/store'
      }
      ]
    }
  }
}
</script>
<style scoped>
    /* 因为不用插图，这里需要对loanBanner重新定义高度 */
  .loanBanner {
    height: 5.875rem;
  }
  .container{
      min-height: 102.5%;
  }
 .creditWrite{
    width: 100%;
    height: 22.8rem;
    background-color: rgba(255, 255, 255, 0.925);
    position: absolute;
    top: 1.6rem;
    padding-left:0.7rem ;
    padding-top: 1rem;
  }
    .creditWrite .number{
      width: 15rem;
      font-size:25px;
      background:transparent;
      float: right;
    }
    .creditWrite li{
      font-size:35px;
      margin-bottom:0.5rem;
      height: 1.8rem;
      color: rgba(0, 0, 255, 0.336);
      border-bottom: 1px solid rgba(128, 128, 128, 0.219);
      position: relative;
    }

    .creditWrite li:hover{
      cursor: pointer;
    }

    .creditWrite span:after{
      content: '\27A4';
      color:black;
      float: right;
    }

    .creditWrite span{
        color: black;
        font-size:31px;
        margin-left: 1.5rem;
        position: absolute;
        bottom: 0.6rem;
        width: 16rem;
    }
</style>
