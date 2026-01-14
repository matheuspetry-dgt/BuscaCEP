import axios from "axios"

export const Api = () => {
    const busca = axios.get('https://viacep.com.br/ws/88161384/json/')
    const dados = busca.data
    return dados
}