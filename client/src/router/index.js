import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/meetup/:id",
    name: "createmeet",
    props: true,
    component: () => import("@/views/MeetupCard.vue"),
  },
  {
    path: "/meetup/create",
    name: "create",
    component: () => import("@/views/CreateMeetup.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
