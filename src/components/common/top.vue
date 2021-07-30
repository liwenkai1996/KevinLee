<template>
    <div class = "loanBanner">
        <p>
            <span class = 'tit'>
                {{items}}
            </span>
        </p>
        <a v-show='showBackground' href="#">
            <img  src= '../../assets/png/Uploads/advs/adv_3.jpg'>
        </a>
        <slot name = 'banner'></slot>
        <span class='back' @click="$router.push('/loan')"></span>
    </div>
</template>
<script>
export default{
  data: function () {
    return {
      items: '草根金融'
    }
  },
  props: ['showBackground']
}
</script>
