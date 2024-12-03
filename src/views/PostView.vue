<template>
    <h3>Posts</h3>
    <div class="card" v-for="post in posts" @click="goToPost(post.postId)">
        <span>{{post.title}}</span>
    </div>

    <router-link to="/posts/new/form">New</router-link>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            posts: [
                { postId:1, title:"Trump won election"},
                { postId:2, title:"Cool post"},
                { postId:3, title:"Raining"}
            ],
        };
    },

    methods: {
        goToPost(postId) {
            this.$router.push('/posts/${postId}')
        }
    }
}
</script>

<style scoped>
.card{
    border: 1px solid navy;
    border-radius: 3px;
    margin: 10px 0px;
    padding: 10px;

}
</style>