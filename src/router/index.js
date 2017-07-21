import Index from '../page/index.vue'
import ShoppingCar from '../page/shoppingCar.vue'
import MyOwn from '../page/myOwn.vue'
import MyClassify from '../page/classify.vue'
import OrderList from '../page/orderList.vue'
import Collection from '../page/collection.vue'
import {
  AllEntrance,
  WaitPay,
  WaitPost,
  WaitGet,
  WaitCommit,
  Repair,
  CollectionItemGoods,
  CollectionItemShop
} from '../components'

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
  },
  {
    path: '/OrderList',
    component: OrderList,
    children: [
      {
        path: '/AllEntrance',
        component: AllEntrance
      },
      {
        path: '/',
        redirect: '/AllEntrance'
      },
      {
        path: '/WaitPay',
        component: WaitPay
      },
      {
        path: '/WaitPost',
        component: WaitPost
      },
      {
        path: '/WaitGet',
        component: WaitGet
      },
      {
        path: '/WaitCommit',
        component: WaitCommit
      },
    ]
  },
  {
    path: '/Repair',
    component: Repair
  },
  {
    path: '/Collection',
    component: Collection,
    children: [
      {
        path: '/CollectionItemGoods',
        component: CollectionItemGoods
      },
      {
        path: '/',
        redirect: '/CollectionItemGoods'
      },
      {
        path: '/CollectionItemShop',
        component: CollectionItemShop
      }
    ]
  },
]
