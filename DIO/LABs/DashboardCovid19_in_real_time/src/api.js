import axios from 'axios';

const path = 'https://coronavirus-19-api.herokuapp.com/countries'

function getCountry(country){

    const result = axios.get(`${path}/${country}`)
      .then( response => response.data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     })

    return result
}

export default {
    getCountry
}