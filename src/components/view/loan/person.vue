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
    <router-link to='/borrow'>
        <img  src="../../../assets/img/logoImg.png" >
    </router-link>
    <div class = 'registerWrite'>
      <li>
          <label for="手机号">手机号</label>
          <input id='phoneInput' class='number' type="text" name="手机号" placeholder="请输入手机号">
      </li>
      <li>
          <label for="验证码">验证码</label>
          <input id='judgeInput' class='number' type="text" name="验证码" placeholder="请输入验证码">
      </li>
      <span class='judgeInputCode' @click='changeCode(5)'>{{codeNumber}}</span>
      <li>
          <label for="短信验证码">短信验证码</label>
          <input id='messageInput' class='number' type="text" name="短信验证码" placeholder="请输入短信验证码">
      </li>
      <span @click='changeMessage()' :class='getClass ()' >{{messageNumber}}</span>
      <li>
          <label for="登录密码">登录密码</label>
          <input id='registerInput' class='number' :type="[displayRegisterCodeFlag ===false?'password':'text']" name="登录密码" placeholder="请输入验证码">
      </li>
      <span class='registerInputCode' @click="getDisplayRegister()" >{{displayRegisterCode}}</span>
      <li>
          <label for="确认密码">确认密码</label>
          <input id='certainInput' class='number' :type="[displayCertainCodeFlag ===false?'password':'text']" name="确认密码" placeholder="请输入验证码">
      </li>
     <span class='certainInputCode' @click="getDisplayCertain()" >{{displayCertainCode}}</span>

      <button class=routerButton type="submit" @click='judgeCode(),phoneInput()'>立即注册</button>
    </div>
    <footComponent :idx='2'></footComponent>
</div>
</template>

<script>
export default {
  data: function () {
    return {
      bankName: this.$route.query.auditID,
      codeNumber: '12345',
      messageNumber: '点击发送',
      flag: 0,
      displayRegisterCode: '显示',
      displayCertainCode: '显示',
      displayRegisterCodeFlag: false,
      displayCertainCodeFlag: false,
      num: 5,
      // 在点击事件时，由于多次点击会导致重复调用setInterval
      // ，因此需要初始化一个变量getTimeClock,并进行判断
      getTimeClock: null
    }
  },
  methods: {
    // 验证码长度
    changeCode (valueLength) {
      // eslint-disable-next-line no-array-constructor
      let arrays = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
      )
      let codeList = ''
      for (let i = 0; i < valueLength; i++) {
        let everyCode = parseInt(Math.random() * arrays.length)
        codeList += arrays[everyCode]
      }
      //  console.log(codeList)
      this.codeNumber = codeList
    },
    changeMessage () {
      this.messageNumber = this.num + 's后重发'
      this.flag = 1
      // 在setInterval里面使用function时，this指向function，因此需要利用变量that指向this，改变this指向
      let that = this
      if (that.getTimeClock !== null) {
        console.log('exist')
      } else {
        that.getTimeClock = setInterval(function () {
          that.num--
          that.messageNumber = that.num + 's后重发'
          if (that.num === 0) {
            clearInterval(that.getTimeClock)
            that.flag = 0
            that.num = 5
            that.messageNumber = '重新发送'
            that.getTimeClock = null
          }
        }, 1000)
      }
    },
    getClass () {
      if (this.flag === 0) {
        return 'messageInputCode'
      } else if (this.flag === 1) {
        return 'messageInputCode showFirst'
      }
    },
    // 条件正确则返回
    judgeCode () {
      let inputCode = document.getElementById('judgeInput').value
      let phoneCode = document.getElementById('phoneInput').value
      let messageCode = document.getElementById('messageInput').value
      let registerCode = document.getElementById('registerInput').value
      let certainCode = document.getElementById('certainInput').value
      //  console.log(inputCode)
      if (phoneCode.length !== 11) {
        alert('请输入正确的手机号')
      } else {
        if (inputCode.length !== this.codeNumber.length) {
          alert('验证码输入长度不对，请重新输入')
        } else if (inputCode.toLowerCase() !== this.codeNumber.toLowerCase()) {
          alert('验证码输入不对，请重新输入')
        } else {
          if (messageCode.length !== 6) {
            alert('请输入正确的短信验证码')
          } else {
            if (registerCode.length === 0 || certainCode.length === 0) {
              alert('密码不能为空,请输入')
            } else if (registerCode.toLowerCase() !== certainCode.toLowerCase()) {
              alert('两次输入的密码长度不相等，请重新输入')
            } else {
              return this.$router.push('/loan')
            }
          }
        }
      }
    },

    getDisplayRegister () {
      this.displayRegisterCodeFlag = !this.displayRegisterCodeFlag
      if (this.displayRegisterCodeFlag === false) {
        this.displayRegisterCode = '显示'
      } else {
        this.displayRegisterCode = '隐藏'
      }
    },
    getDisplayCertain () {
      this.displayCertainCodeFlag = !this.displayCertainCodeFlag
      if (this.displayCertainCodeFlag === false) {
        this.displayCertainCode = '显示'
      } else {
        this.displayCertainCode = '隐藏'
      }
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
      min-height: 110%;
  }
  .container img{
    position: absolute;
    left: 7rem;
  }

 .registerWrite{
    width: 100%;
    height: 21.8rem;
    background-color: rgba(255, 255, 255, 0.692);
    position: absolute;
    top: 10rem;
    padding-left:0.7rem ;
    padding-top: 1rem;
  }
  .registerWrite .number{
      width: 15rem;
      font-size:25px;
      background:transparent;
      float: right;
    }

    .registerWrite li{
      font-size:25px;
      margin-bottom:1rem;
      height: 1.8rem;
      border-bottom: 1.3px solid rgba(128, 128, 128, 0.219);
    }
    .registerWrite .judgeInputCode{
        height: 1.5rem;
        width: 3.7rem;
        position:absolute;
        left: 15rem;
        background-color: black;
        color:white;
        padding-left: 0.5rem;
        top: 3.8rem;
    }
    .registerWrite .judgeInputCode:hover, .messageInputCode:hover{
       cursor: pointer;
    }

    .registerWrite .messageInputCode{
        height: 1.5rem;
        width: 3.7rem;
        font-size: 25px;
        position:absolute;
        left: 15rem;
        background-color: rgb(42, 111, 201);
        color:white;
        padding-left: 0.5rem;
        padding-top: 0.3rem;
        border-radius: 10px;
        top: 6.3rem;
    }
    .registerWrite .showFirst{
        background-color: rgba(128, 128, 128, 0.479);
        padding-left: 0.45rem;
        padding-right: 0.05rem;
    }

    .registerWrite .registerInputCode{
        height: 1rem;
        width: 1.7rem;
        position:absolute;
        left: 17rem;
        font-size:18px;
        background-color: rgb(42, 111, 201,0.1);
        color:black;
        padding-left: 0.5rem;
        padding-top: 0.15rem;
        border-radius: 100px;
        top: 9.5rem;
    }

    .registerWrite .certainInputCode{
        height: 1rem;
        width: 1.7rem;
        position:absolute;
        left: 17rem;
        font-size:18px;
        background-color: rgb(42, 111, 201,0.1);
        color:black;
        padding-left: 0.5rem;
        padding-top: 0.15rem;
        border-radius: 100px;
        top: 12.5rem;
    }
    .registerWrite .registerInputCode:hover, .certainInputCode:hover{
        cursor: pointer;
        color:red
    }
    .registerWrite .routerButton{
        background-color: rgba(107, 107, 240, 0.527);
        width: 18rem;
        height: 2rem;
        line-height: 1.5rem;
        border-radius: 18px;
        color: white;
        font-size:30px;
    }
    .registerWrite .routerButton:hover{
        cursor: pointer;
        color: darkgray;
    }

</style>
