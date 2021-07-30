<template>
    <div class="container">
        <p class='back' @click="$router.push('/loan')" >
                &lt;返回
        </p>
        <topComponent :showBackground = 'false'></topComponent>
          <!--返回按钮，可以导航到主页面-->
          <div class = 'loanBorrow'>
            <p>
                <label for="name">请输入姓名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" name='name' placeholder = 'liwenkai'>
            </p>
            <hr>
            <p>
                <label for="gender">请输入性别:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
                <input type="text" name='gender' placeholder = 'male'>
            </p>
            <hr>
            <p>
                <label for="age">请输入年龄:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="text" name='age' placeholder = '25'>
            </p>
            <hr>
            <p>
                <label for="phoneNumber">请输入邮箱:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="email" name='phoneNumber' placeholder = '132465465789'>
            </p>
            <hr>
            <p>
                <label for="phoneNumber">请输入手机号:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" name='phoneNumber' placeholder = '132465465789'>
            </p>
            <hr>
            <p>
                <label for="ID">请输入身份证号:&nbsp;</label>
                <input type="text" name='ID' placeholder = '132465789'>
            </p>
            <hr>
            <p>
                <label for="bankID">请输入银行卡号:&nbsp;</label>
                <input type="text" name='bankID' placeholder = '132465465789'>
            </p>
            <hr>
            <p>
                <label for="bankPassword">请输入密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="password" name='bankPassword' placeholder = '132465465789'>
            </p>
            <hr>
            <p>
                <label for="salary">工资范围:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select name="salary">
                    <option value="first">2000-5000</option>
                    <option value="second">5000-8000</option>
                    <option value="third">8000-11000</option>
                    <option value="fourth">11000-14000</option>
                    <option value="fifth">>14000</option>
                </select>
            </p>
            <hr>
            <p>how do you hear about us</p>
            <form>
                <span>
                    <input  class= "form" type="checkbox" style="zoom:0.5" name="how" value="advertisement" id="advertisement" />
                    <label  for="advertisement">Advertisement</label>
                </span>
                <span>
                    <input  class= "form" type="checkbox" style="zoom:0.5" name="how" value="Email Newsletter" id="Email Newsletter" />
                    <label  for="Email Newsletter">Email Newsletter</label>
                </span>
                <span>
                    <input  class= "form" type="checkbox" style="zoom:0.5" name="how" value="FaceSpace" id="FaceSpace" />
                    <label  for="FaceSpace">FaceSpace</label>
                </span>
                &nbsp;&nbsp;&nbsp;
                   <!--下拉菜单，绑定事件，点击other可以出现下拉菜单-->
                <span>
                    <input @click= "test()" class= "form"  type="checkbox" style="zoom:0.5" name="how" value="other" id="other" />
                   <label  for="other">other</label>
                </span>
                <textarea :class="[flag===true?'show':'unshow']" id="other-description"  placeholder="TV, school, bingo game, ➝ etc." title="Please describe how you heard about us." >
                </textarea>
            </form>
            <a href="">
                <img  src="../../../assets/img/creditReportBg.jpg" >
            </a>
          </div>
        <footComponent :idx='0'></footComponent>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      flag: false
    }
  },
  // 将flag设置为!flag可以自适应根据点击出现下拉框
  methods: {
    test: function () {
      this.flag = !this.flag
      console.log(this.flag)
      return this.flag
    }
  }
}
</script>
<style scoped>
    .loanBorrow{
        background-color: aliceblue;
        position: relative;
        max-height: 28.2rem;
        top: -5.4rem;
    }
      .loanBorrow p{
        font-size: 0.7rem;
        margin-left: 0.5rem;
        margin-top : 0.5rem;
        /* margin-bottom: 0.2rem; */
      }
      .loanBorrow input{
        width:300px;
        height:30px;
        line-height:30px;
        }
      .loanBorrow hr{
        height: 1px;
        border:none;
        border-top:1px dashed #0066CC;
      }
      .loanBorrow label{
        font-size: 0.7rem;
      }
      .loanBorrow select{
        width:300px;
        height:30px;
        line-height:30px;
      }
      .loanBorrow .form{
        font-size: 0.2rem;
        width: 180px;
      }
      .loanBorrow textarea{
        font-size: 0.8rem;
        width: 639px;
        height: 169px;
      }
      .loanBorrow .show{
        display: block;
      }
        .loanBorrow .unshow{
        display: none;
      }
    /* input:not([type=radio]) {
        appearance: none;
    } */
</style>
