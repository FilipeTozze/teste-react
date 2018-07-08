export const valoresPesquisados = (email) => {
    return {
        type: 'VALORES_PESQUISADOS',
        payload: email
    }
}

export const mostrarBarraPesquisa = (param) => {
    return {
        type: 'MOSTRAR_BARRA_PESQUISA',
        payload: param
    }
}