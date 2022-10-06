import { createRouter, createWebHashHistory } from "vue-router";
import FaleConosco from '../views/FaleConosco.vue'
import ListarImovel from '../views/ListarImovel.vue'
import CriarImovel from '../views/CriarImovel.vue'
import EditarImovel from '../views/EditarImovel.vue'

const routes = [
    {
        path: '/faleconosco',
        name: 'FaleConosco',
        component: FaleConosco
    },
    {
        path: '/',
        name: 'Home',
        component: ListarImovel
    },
    {
        path: '/criar',
        name: 'Criar',
        component: CriarImovel
    },
    {
        path: '/editar',
        name: 'Editar',
        component: EditarImovel
    },
]

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});