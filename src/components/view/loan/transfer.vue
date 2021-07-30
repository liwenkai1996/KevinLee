<template>
  <div class="container">
    <p class='back' @click="$router.push('/loan')" >
        &lt;返回
    </p>
    <topComponent :showBackground = 'false'></topComponent>
    <div class = 'bank'>
        <li v-for = 'bankID in bankNameList' :key='bankID' @click = getRouterName(bankID)>
            {{bankID.bankName}}
        </li>
        <!--根据点击可以将隐藏字段显示-->
        <div class='transferAssistWindow'>
            <div :class="['text',flag === true?'show':'unshow']">
                <label class='btn' @click= 'flag=!flag' >{{getName()}}</label>
                <span>
                    <b>
                    招商银行、工商银行、农业银行、中国银行、浦发银行、建设银行、
                    邮政储蓄银行、交通银行、北京银行、光大银行、兴业银行、民生银行、
                    中信银行、平安银行、广发银行、华夏银行、深圳农村银行、上海银行、
                    重庆农村银行。
                    </b>
                </span>
            </div>
        </div>
    </div>
    <footComponent :idx='0'></footComponent>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flag: false,
      item: '展开',
      // 银行列表，这里写入是为了传入数据
      bankNameList: [{
        bankName: '招商银行',
        path: '/bank'
      },
      {
        bankName: '工商银行',
        path: '/bank'
      },
      {
        bankName: '农业银行',
        path: '/bank'
      },
      {
        bankName: '中国银行',
        path: '/bank'
      },
      {
        bankName: '浦发银行',
        path: '/bank'
      },
      {
        bankName: '建设银行',
        path: '/bank'
      },
      {
        bankName: '邮政储蓄银行',
        path: '/bank'
      },
      {
        bankName: '交通银行',
        path: '/bank'
      },
      {
        bankName: '北京银行',
        path: '/bank'
      },
      {
        bankName: '光大银行',
        path: '/bank'
      },
      {
        bankName: '兴业银行',
        path: '/bank'
      },
      {
        bankName: '民生银行',
        path: '/bank'
      },
      {
        bankName: '中信银行',
        path: '/bank'
      },
      {
        bankName: '平安银行',
        path: '/bank'
      },
      {
        bankName: '广发银行',
        path: '/bank'
      },
      {
        bankName: '华夏银行',
        path: '/bank'
      },
      {
        bankName: '深圳农村银行',
        path: '/bank'
      },
      {
        bankName: '上海银行',
        path: '/bank'
      },
      {
        bankName: '重庆农村银行',
        path: '/bank'
      }

      ]
    }
  },
  methods: {
    getName () {
    //   console.log(this.flag)
      if (this.flag === false) {
        this.name = '展开'
      } else if (this.flag === true) {
        this.name = '收起'
      }
      return this.name
    },
    getRouterName (bankID) {
      return this.$router.push({
        path: bankID.path,
        query: {auditID: bankID.bankName}
      })
    }
  }
}
</script>
<style scoped>
    /* 因为不用插图，这里需要对loanBanner重新定义高度 */
   .loanBanner {
    height: 5.875rem;
   }
  .bank{
    width: 100%;
    min-height: 39em;
    /* margin-top: -4.905rem; */
    background-color: rgba(255, 255, 255, 0.692);
  }
   .bank li{
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem ;
    border-bottom: solid 2px rgba(0, 0, 0, 0.226);
    z-index: 101;
  }
  .bank li::before{
      content: "\265A";
  }
  .bank li::after{
      content: "\27A4";
      float: right;
  }

  .bank li:hover{
      cursor: pointer;
      color: rgba(202, 19, 89, 0.281);
      transform: scale(1.1,1);
  }
  .transferAssistWindow{
      display: flex;
      margin-top: 4rem;
  }
    .transferAssistWindow .text{
        margin-top: -3.7rem;
        width:99.3%;
        border: aqua solid 2px;
        color:#333;
        font-size:20px;
        }
    .transferAssistWindow .show{
      display: -webkit-box;
      -webkit-line-clamp: 999;
       overflow: hidden;
      -webkit-box-orient:vertical;
      height: 3.24rem;
    }
    .transferAssistWindow .unshow{
      display: -webkit-box;
      -webkit-line-clamp: 1;
       overflow: hidden;
      -webkit-box-orient:vertical;
      height: 0.81rem;
    }
    .transferAssistWindow .btn{
      color: dodgerblue;
      cursor: pointer;
      font-size:20px;
    }

</style>
