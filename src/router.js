import Vue from 'vue'
import Router from 'vue-router'

import Perform from '@/views/Navbar/Perform'
import Cinema from '@/views/Navbar/Cinema'
import Theatre from '@/views/Navbar/Theatre'
import Drama from '@/views/Navbar/Drama'
import Concert from '@/views/Navbar/Concert'
import Index from '@/views/Tabbar/Index'
import Film from '@/views/Tabbar/Film'
import Eticket from '@/views/Tabbar/Eticket'
import Center from '@/views/Tabbar/Center'
import Show from '@/views/Show'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/show',
      component: Show,
      children: [
        {
          path: '/show/perform',
          component: Perform
        },
        {
          path: '/show/cinema',
          component: Cinema
        },
        {
          path: '/show/theatre',
          component: Theatre
        },
        {
          path: '/show/drama',
          component: Drama
        },
        {
          path: '/show/concert',
          component: Concert
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/film',
      component: Film
    },
    {
      path: '/eticket',
      component: Eticket
    },
    {
      path: '/center',
      component: Center
    }
  ]
})
