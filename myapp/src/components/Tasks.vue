<template>
    <div :key="task.id" v-for="task in tasks">
        <TheTask :task="task" />
    </div>
</template>

<script>
    import TheTask from "./Task.vue"

    export default {
        name: "TheTasks",
        props: {
            tasks: Array
        },
        components: {
            TheTask
        }
    }
</script>