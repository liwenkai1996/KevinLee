<template>
  <div class = "footer">
      <ul>
        <!-- @click="$router.push(item.push)" -->
          <li v-for = '(item,index) in items' :key="index" @click="$router.push(item.push)">
              <!--增加点击事件和悬浮事件-->
              <p  @click='curIdx=index,getIdx(index)' @mouseover="hoverIdx=index" :class="[item.cls,index === curIdx?'on':'', index ===hoverIdx?'footerHover':'']" >{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curIdx: this.idx,
      hoverIdx: this.idx,
      items: [{
        cls: 'loan',
        name: '借款',
        push: '/loanOn'
      },
      {
        cls: 'credit',
        name: '信用',
        push: '/credit'
      },
      {
        cls: 'user',
        name: '个人中心',
        push: '/user'
      }
      ]
    }
  },
  methods: {
    getIdx (index) {
      console.log(this.curIdx)
      console.log(this.hoverIdx)
      console.log(index)
    }
  },
  props: ['idx']
}
</script>
