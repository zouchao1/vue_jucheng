import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home'
import detail from './pages/detail'
import show from './pages/show'
import mine from './pages/mine'
import AppLogin from './pages/login'
import city from './pages/city'
import AppUserInfo from './pages/userInfo'
import auth from './util/auth'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props: true
    },
    {
      path: '/show/:id',
      name: 'show',
      component: show,
      props: true
    },
    {
      path: '/city',
      name: 'city',
      component: city,

    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      redirect: {
        name: 'user-info'
      },
      children: [

        {
          path: 'login',
          name: 'login',
          component: AppLogin

        },
        {
          path: 'user-info',
          name: 'user-info',
          component: AppUserInfo,
          beforeEnter: (to, from, next) => {
            let result = auth.authLogin()

            next(
              result ? true : {
                name: 'login'
              }
            )
          }


        }
      ]
    }
  ]
})