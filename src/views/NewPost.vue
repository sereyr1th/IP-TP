<template>
    <h2>New Post</h2>
    <form >
        <label >Post Title: </label>
        <input name="title">
    </form>

    <button>
        <router-link to="/">Cancel</router-link>
    </button>
    <button @click="savePost">Save</button>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    savePost() {
        this.$router.push("posts/3");
    }
}
</script>