import { LISTA_CONVERSAS_USUARIO } from '../Actions/types';;

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONVERSAS_USUARIO:
            action.payload;

        default:
            return state;

    }
}
