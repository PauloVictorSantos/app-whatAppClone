export const modificaEmail = (texto) => {
    console.log(texto);
    return {
        type: 'modifica_email',
        payload: texto
    }
}

export const modificaSenha =(texto)=>{
    return {
        type: 'modifica_senha',
        payload : texto
    }
}