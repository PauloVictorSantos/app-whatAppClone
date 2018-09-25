export const modificaEmail = (texto) => {
    console.log(texto);
    return {
        type: 'modifica_email',
        payload: texto
    }
}