import axios from "axios"

export const buscarCep = (cepDigitado) => {
    return axios.get(`https://viacep.com.br/ws/${cepDigitado}/json/`)
   
}