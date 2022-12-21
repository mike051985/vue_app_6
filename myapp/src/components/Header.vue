<template>
    <header>
        <h1>{{ title }}</h1>
        <TheButton text="Add Task" color="green" />
    </header>
</template>

<script>
    import TheButton from "./Button.vue" 

    export default {
        name: "TheHeader",
        props: {
            title: String,
        },
        components: {
        TheButton,
        }
    }
    
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>