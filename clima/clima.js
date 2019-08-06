const axios = require('axios');


const getClima = async( lat, lng ) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a4d7622288f7693392da74108b353239&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}