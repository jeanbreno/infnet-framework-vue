import { createStore } from "vuex";

const index = {
    namespaced: true,
    state: {
        imoveis: [],
        imovelSelecionado:{}
    },
    getters: {
        getImoveis(state) {
            return state.imoveis
        }
    },
    mutations: {
        adicionarImovel(state, imovel) {
            state.imoveis.push(imovel);
        },
        imovelSelecionado(state, imovel) {
            state.imovelSelecionado=imovel;
        },
        deletarImovel(state, imovel) {
            state.imoveis = state.imoveis.filter(s => s !== imovel)
            console.log(state.imoveis)
        }
    },
    actions: {
        adicionarImovel({commit}, imovel) {
            commit('adicionarImovel', imovel);
        },
        deletarImovel({commit}, imovel) {
            commit('deletarImovel', imovel)
        }
    }
}

const modules = { index };

export default createStore(
    {modules}
)