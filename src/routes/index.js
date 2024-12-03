import { createRouter, createWebHistory }  from "vue-router"
import PostView from "@/views/PostView.vue"
import PostDetail from "@/views/PostDetail.vue"
import NewPost from "@/views/NewPost.vue"

const routes = [
    {path: '/', component: PostView},
    {path: '/posts/new/form', component: NewPost},
    {path: '/posts/:postId', component: PostDetail},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;