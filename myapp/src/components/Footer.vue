<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style scoped>
a {
    color: #333333;
}

footer {
    margin-top: 30px;
    text-align: center;
}
</style>