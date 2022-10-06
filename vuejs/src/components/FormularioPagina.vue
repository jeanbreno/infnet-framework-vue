<template>
    <form class="form" @submit.prevent="criarImovel()">
        <div class="form-group">
            <label for="inputAddress">Rua</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Rua São José" required v-model="imovel.inputAddress">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="inputNumber">Número</label>
                <input type="number" class="form-control" id="inputNumber" placeholder="94" required v-model="imovel.inputNumber">
            </div>
            <div class="form-group">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="inputCEP" placeholder="xxxxx-xxx" required pattern="[0-9]{5}-[0-9]{3}" v-model="imovel.inputCEP">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-5">
                <label for="inputBairro">Bairro</label>
                <input type="text" class="form-control" id="inputBairro" placeholder="Centro" required v-model="imovel.inputBairro">
            </div>
            <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity" placeholder="Rio de Janeiro" required v-model="imovel.inputCity">
            </div>
            <div class="form-group col-md-2" id="state">
                <label for="inputState">Estado</label>
                <input type="text" class="form-control" id="inputState" placeholder="RJ" required pattern="[A-Z]{2}" v-model="imovel.inputState">
            </div>
        </div>
        <div class="form-group col-md-2" id="btn-img">
            <label for="inputImg">URL da Imagem</label>
            <input type="text" class="form-control" id="image" placeholder="https://..." v-model="imovel.inputImg" required>
        </div>
        <div class="form-group">
            <label id="label-tipo" for="inputType">Tipo de Imóvel</label>
            <div v-for="(type, index) in types" :key="index" v-bind:value="type" class="form-check form-check-inline">
                <input name="inputType" class="form-check-input" type="radio" v-model="imovel.inputType" :value="type" required>
                <label class="form-check-label" name="inputType" for="inputType">{{type}}</label>
            </div>
        </div><hr>
        <div class="btn-container">
            <router-link to="/"><button class="btn back">Voltar</button></router-link>
            <button type="submit" class="btn add">Adicionar</button>
        </div>
    </form>
</template>
<script>
    import { mapActions } from 'vuex'
    import axios from 'axios'
    export default {
        data() {
            return {
                imovel: {
                    inputAddress: "",
                    inputNumber: "",
                    inputCEP: "",
                    inputType: "",
                    inputCity: "",
                    inputState: "",
                    inputImg: "",
                    dt:new Date().toLocaleDateString(),
                    dh:new Date().toLocaleTimeString(),
                },
                types: ["Casa", "Apartamento", "Terreno", "Kitnet"],
                baseUrl: process.env.VUE_APP_BASE_URL
            }
        },
        methods: {
            ...mapActions('index', ['adicionarImovel']),
            criarImovel() {
                this.adicionarImovel(this.imovel);this.$router.push('/');
            },
            fetchData(){
                    axios.get('json/arq.json').then(response => {
                    this.cidades = response.data
                    console.log(this.cidades);
                })
            }
        },
        created(){
            this.fetchData();
        }
    }
</script>
<style scoped>
input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
}
#label-tipo{
    padding: 10px;
    display: block;
}
.btn-container{
    display: flex;
    flex-direction: row;
    gap:50px;
    padding: 19px;
}
.btn {
cursor: pointer;
width: 100%;
flex-wrap: wrap;
}
#state{
width: 50px;
}
.back{
    border: 1px solid black;
    color: black;
}
.back:hover{
    background-color: chocolate;
    border: 1px solid white;
    color: white;
    transition: opacity 0.5s ease;
    box-shadow: 0.2em 0.1em 0.6em whitesmoke ;
}
#btn-img{
width: 100%;
}
.add{
    background: chocolate;
}
.add:hover {
background-color: rgb(207, 175, 162);
border: 1px solid black;
color: black;
transition: opacity 0.5s ease;
}
.form {
width: 55%;
}
.form-row{
display: flex;
flex-direction: row;
align-items: center;
flex-direction: row;
justify-content: space-between;
}
</style>