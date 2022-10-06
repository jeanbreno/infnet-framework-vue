<template>
    <main>
        <CabecalhoPagina />
        <FormularioPagina />
    </main>
</template>
<script>
    import CabecalhoPagina from '../components/CabecalhoPagina.vue'
    import FormularioPagina from '../components/FormularioPagina.vue'

    export default {
        components: {
            CabecalhoPagina,
            FormularioPagina
        }
    }
</script>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    text-align: center;
    padding: 20px;
}
</style>