import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/page/Post'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    }
  ]
})
