<template>
<div class="container">
    <p class='back' @click="$router.push('/transfer')" >
        &lt;返回
    </p>
    <div class = "loanBanner">
        <p>
            <span class = 'tit'>
                {{bankName}}
            </span>
        </p>
    </div>
    <div class = 'backgroundWrite'>
      <li>
          <label for="银行卡">银行卡</label>
          <input class='number' type="text" name="银行卡" placeholder="请输入银行卡号">
      </li>
      <li>
          <label for="账号">账号</label>
          <input class='number' type="text" name="账号" placeholder="请输入身份证/用户名">
      </li>
      <li class= 'assist'>
          <label for="密码">密码</label>
          <input class='number' type="password" name="密码" placeholder="请输入登录密码">
            <b>
              <p>如忘密码请登录官网找回</p>
            </b>
      </li>
      <li>
          <label for="验证码">验证码</label>
          <input class='number' id='judge' type="text" name="密码" placeholder="请输入验证码">
          <span class='code' @click="changeCode(5)">{{codeNumber}}</span>
      </li>
      <button class=routerButton type="submit" @click=judgeCode()>确认提交</button>
      <b>
        <span class='lastAssist'>温馨提示：请确认您填写的信息为本人所有，填写他人信息可能出现授权失败</span>
      </b>
    </div>
    <footComponent :idx='0'></footComponent>
</div>
</template>
<script>
export default{
  data: function () {
    return {
      bankName: this.$route.query.auditID,
      codeNumber: '12345'
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
    // 验证码正确则返回
    judgeCode () {
      let inputCode = document.getElementById('judge').value
      console.log(inputCode)
      if (inputCode.length !== this.codeNumber.length) {
        alert('输入验证码长度不对，请重新输入')
      } else if (inputCode.toLowerCase() !== this.codeNumber.toLowerCase()) {
        alert('输入验证码不对，请重新输入')
      } else {
        return this.$router.push('/loan')
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

  .backgroundWrite{
    width: 100%;
    height: 21.8rem;
    background-color: rgba(255, 255, 255, 0.692);
    position: relative;
    padding-left:0.7rem ;
    padding-top: 1rem;
  }

    .backgroundWrite li{
        margin-bottom:1rem;
        height: 1.8rem;
        border-bottom: 1.3px solid rgba(128, 128, 128, 0.219);
    }

    .backgroundWrite p{
        /* margin-bottom:1rem; */
        width: 16rem;
        font-size: 20px;
        float: right;
        color: rgba(128, 128, 128, 0.219);
    }

    .backgroundWrite .assist{
        margin-bottom:1rem;
        height: 2.5rem;
        border-bottom: 1.3px solid rgba(128, 128, 128, 0.219);
    }

    .backgroundWrite .number{
        width: 16rem;
        /* height: 1.5rem;
        margin-left: 1rem;
        margin-bottom: 0.5rem; */
        background:transparent;
        font-size:30px;
        float: right;
    }
    .backgroundWrite .code{
        height: 1.5rem;
        width: 3.7rem;
        /* float: right; */
        position:absolute;
        left: 15rem;
        background-color: black;
        color:white;
        padding-left: 0.5rem;
    }
    .backgroundWrite .code:hover{
       cursor: pointer;
    }

    .backgroundWrite .routerButton{
        background-color: rgba(107, 107, 240, 0.527);
        width: 18rem;
        height: 2rem;
        line-height: 1.5rem;
        border-radius: 18px;
        color: white;
        font-size:30px;
    }
    .backgroundWrite .routerButton:hover{
        cursor: pointer;
        color: darkgray;
    }
    .backgroundWrite .lastAssist{
        float: left;
        font-size: 24px;
        margin-right: 2rem; ;
    }
</style>
