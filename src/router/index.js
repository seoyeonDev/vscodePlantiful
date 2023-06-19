import { createRouter, createWebHistory } from 'vue-router'
//로그인 페이지 보이게 homeview를 로그인 페이지로 설정 
import Homeview from '../components/members/login.vue'
import SubscribeBoardList from '../components/subscribeboard/SubscribeBoardList.vue'
import SubscribeBoardAdd from '../components/subscribeboard/SubscribeBoardAdd.vue'

const routes = [
  // 제일처음 시작할때 나올 로그인 화면 
  {
    path: '/',
    name: 'home',
    component: Homeview
  },
  {
    path: "/login",
    name: 'login',
    component: login
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: "/join",
    name: 'join',
    component: join
  },
  {
    path: '/SubscribeBoardAdd',
    name: 'SubscribeBoardAdd',
    component: SubscribeBoardAdd
  },
  {
    path: '/SubscribeBoardList',
    name: 'SubscribeBoardList',
    component: SubscribeBoardList
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
