const INITIAL_STATE = {
    pessoas: [],
    pessoasBkp: [],
    loadingPessoas: true
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){        
        case 'BUSCA_PESSOAS':
            return { 
                    ...state, 
                    pessoas: action.payload.pessoas,
                    pessoasBkp: action.payload.pessoas, 
                    loadingPessoas: action.payload.loadingPessoas
                };
        case 'MODIFICA_LISTAGEM':
            return { ...state, pessoas: action.payload};   
        case 'RETORNA_LISTAGEM':
            return { ...state, pessoas: state.pessoasBkp};
        case 'ALTERA_STATUS_PESSOA':
            return { 
                    ...state, 
                    pessoas: action.payload,
                    pessoasBkp: action.payload
                };    
        default:
            return state;    
    }
    
}