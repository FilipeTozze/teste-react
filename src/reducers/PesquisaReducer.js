const INITIAL_STATE = {
    buscaRecentes: [],
    mostraPesquisa: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'VALORES_PESQUISADOS':
            let objPesquisadosAux = state.buscaRecentes;
            let objPesquisados = objPesquisadosAux.concat(action.payload);
            return {...state, buscaRecentes: objPesquisados};
        case 'MOSTRAR_BARRA_PESQUISA':
            return {...state, mostraPesquisa: action.payload};
        default:
            return state;    
    }
}