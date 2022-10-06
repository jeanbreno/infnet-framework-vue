<template>
    <body>
        <CabecalhoPagina />
        <div class="imoveis" v-if="imoveis.length != 0">
        <div class="card mb-3" v-for="(imovel, index) in imoveis" :key="index">
            <img :src="imovel.inputImg" class="imgImovel"/>
            <div class="card-body">
                <p class="card-text"><small class="text-muted">{{ "Data de atualização: "+imovel.dt+" "+imovel.dh }}</small></p>
                <p>{{ imovel.inputType }}</p>
                <h5 class="card-title">{{ imovel.inputAddress+", "+imovel.inputNumber }}</h5>
                <p>{{ "CEP: "+imovel.inputCEP+", "+imovel.inputBairro }}</p>
                <p>{{ imovel.inputCity+" - "+imovel.inputState }}</p>
                <button class="btn excluir" @click="deletarImovel(imovel)">Excluir</button>
                <button class="btn editar" @click="editarImovel(imovel)">Editar</button>
            </div>
        </div>
        </div>
        <div v-else id="repo-vazio">
            <p>Ainda não temos imóveis adicionados :(</p>
        </div>
        <router-link to="/faleconosco"><footer>Fale Conosco</footer></router-link>
    </body>
</template>
<script>
    import CabecalhoPagina from "../components/CabecalhoPagina.vue";
    import { mapState } from "vuex";
    import { mapActions } from "vuex";

    export default {
        name: "App",
        components: {
            CabecalhoPagina,
        },
        methods: {
            add() {
                this.$router.push("/criar");
            },
            ...mapActions('index', ['editarImovel']),
            ...mapActions('index', ['deletarImovel'])
        },
        computed: {
            ...mapState('index', ['imoveis'])
        }
    };
</script>
<style scoped>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        text-align: center;
        padding: 20px;
        height: 100%;
        background-image: url("../assets/city.jpg")
    }
    h1 {
        color: cyan;
    }
    .btn {
        width: 80px;
        background-color: chocolate;
        margin: 10px;
    }
    .btn:hover {
        border: 1px solid black !important;
        color: black !important;
    }
    .excluir, .editar {
        margin-bottom: 5px;
    }
    .excluir:hover {
        background-color: crimson;
    }
    .imoveis {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .card {
        width: 600px;
        margin: 10px;
    }
    .card-body {
        margin: 0;
        padding: 0;
    }
    .imgImovel {
        width: 580px;
        margin: 10px;
    }
    #repo-vazio {
        font-size: 30px;
        font-weight: bold;
        color: antiquewhite;
        margin-top: 6rem;
        text-shadow: 0.1em 0.1em 0.7em black,
            0.3em 0.2em 0.9em black;
    }
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Ubuntu:wght@400;700&display=swap');
    .card-title{
        font-weight: bold;
        font-family: 'Ubuntu', sans-serif;
    }
    footer, a{
        color: antiquewhite;
        margin-top: 6rem;
        font-size: x-large;
        text-shadow: 0.2em 0.1em 0.7em black,
            0.3em 0.2em 0.9em black,
            0.1em 0.5em 10em black;
        text-decoration: none;
    }
    footer:hover{
        color:azure;
        transform: scale(1.1);
    }
</style>
  