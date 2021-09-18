<template>
    <div class="wrapper">
        <navBar />
        <sidebar />
        <mainComponent />
        <footerBar />
    </div>
</template>

<script>
    import navBar from "../layout/nav.vue";
    import sidebar from "../layout/sidebar.vue";
    import mainComponent from "../layout/main.vue";
    import footerBar from "../layout/footer.vue";
    export default {
        name: "index",
        components: {
            navBar,
            sidebar,
            mainComponent,
            footerBar
        }
    }
</script>

<style scoped>

</style>