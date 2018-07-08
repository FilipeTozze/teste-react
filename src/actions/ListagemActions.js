import axios from 'axios';

export const buscaPessoas = async () => {
    const retorno = await axios.get('https://randomuser.me/api/?results=30');
    let objPessoas = retorno.data.results;
    let objRetorno = {};
    objRetorno.pessoas = objPessoas.map( function(item, index){
                        let dateString = new Date(item.registered.date).toLocaleString();
                        dateString = dateString.split(' ');
                        item.name = `${item.name.first} ${item.name.last}`;
                        item.city = `${item.location.city} - ${item.location.state.toUpperCase()}`;
                        item.avatar = `${item.picture.large}`;
                        item.birthday = `${dateString[0]}`;
                        item.andress = `${item.location.street}`;
                        item.password = `${item.login.password}`;
                        item.key = index;
                        item.status = 1;
                        return item;
                    });
    objRetorno.loadingPessoas = false;              
    return {
        type: 'BUSCA_PESSOAS',
        payload : objRetorno
    }
}

export const modificaListagem = (param) => {
    return {
        type: 'MODIFICA_LISTAGEM',
        payload: param
    }
}

export const retornaListagem = () => {
    return {
        type: 'RETORNA_LISTAGEM',
        payload: null
    }
}

export const alteraStatusPessoa = (param) => {
    return {
        type: 'ALTERA_STATUS_PESSOA',
        payload: param
    }
}