import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'C:/Users/nhtig_000/vue projects/student/src/router/Dashboard.vue'
import AddStudent from 'C:/Users/nhtig_000/vue projects/student/src/router/AddStudent.vue'
import StudentData from 'C:/Users/nhtig_000/vue projects/student/src/router/StudentData.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/addstudent',
      name: 'addstudent',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddStudent//() => import(/* webpackChunkName: "AddStudent" */ './views/AddStudent.vue')
    },
    {
      path: '/studentdata',
      name: 'studendata',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: StudentData//() => import(/* webpackChunkName: "AddStudent" */ './views/StudentData.vue')
    }
  ]
})