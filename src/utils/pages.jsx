import { CrearContacto } from "../components/CrearContacto";
import { ListaContactos } from "../components/ListaContactos";



export const pages = [
    {
        name: "Landing",
        route: "/",
        component: <ListaContactos />
    },
    {
        name: "Crear Contato",
        route: "/crearContacto",
        component: <CrearContacto />
    },
]