<template>
    <ul class="indexList mt20">
        <li v-for=' data in list' :key="data" :class='data.cls' @click='$router.push(data.push)' >
            <b>{{data.tit}}</b>
            {{data.con}}
        </li>
    </ul>
</template>

<script >
export default{
  data: function () {
    return {
      list: [{
        tit: '第一项',
        con: '这是借钱',
        cls: 'icon02',
        push: '/borrow'
      },
      {
        tit: '第二项',
        con: '这是存钱',
        cls: 'icon03',
        push: '/store'
      },
      {
        tit: '第三项',
        con: '这是转账',
        cls: 'icon04',
        push: '/transfer'
      }]
    }
  }
}
</script>
