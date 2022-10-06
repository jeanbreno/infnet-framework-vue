<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../assets/casa-nova.png" alt="Logo" width="50" class="d-inline-block align-text-top">
                Imóveis RJ
            </a>
            <a class="btn-nav" @click="add()">Adicionar Imóvel</a>
        </div>
    </nav>
</template>
<script>
    /* eslint-disable */
    import ListarImovel from "../views/ListarImovel.vue";

    export default {
        name: "App",
        components: {
            ListarImovel,
        },
        methods: {
            add() {
                this.$router.push("/criar");
            }
        }
    };
</script>
<style>
    .navbar{
      background-color: #9b5041;
      box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.45);
      -webkit-box-shadow: 0px 1px 5px -2px rgba(0,0,0,0.45);  
    }
    .btn-nav{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
  </style>