import Index from '../page/index.vue'
import ShoppingCar from '../page/shoppingCar.vue'
import MyOwn from '../page/myOwn.vue'
import MyClassify from '../page/classify.vue'

export default[
  {
    path: '/',
    component: Index,
  },
  {
    path: '/ShoppingCar',
    component: ShoppingCar
  },
  {
    path: '/MyOwn',
    component: MyOwn,
  },
  {
    path: '/MyClassify',
    component: MyClassify
  }
]
