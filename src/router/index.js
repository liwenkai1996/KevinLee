import home from '../components/home.vue'
import loan from '../components/view/loan'
// import hello from '../components/demo/HelloWorld.vue'
import borrow from '../components/view/loan/borrow.vue'
import store from '../components/view/loan/store.vue'
import transfer from '../components/view/loan/transfer.vue'
import bank from '../components/view/loan/bank.vue'
import person from '../components/view/loan/person.vue'
import credit from '../components/view/loan/credit.vue'
export default[{
  path: '/',
  component: home,
  redirect: '/loan',
  children: [{
    path: '/loan',
    component: loan
  },
  {
    path: '/loanOn',
    component: loan
  },
  {
    path: '/user',
    component: person
  },
  {
    path: '/credit',
    component: credit
  },
  {
    path: '/borrow',
    component: borrow
  },
  {
    path: '/store',
    component: store
  },
  {
    path: '/transfer',
    component: transfer
  },
  {
    path: '/bank',
    component: bank
  }
  ]
}
]
