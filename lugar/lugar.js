const axios = require('axios');


const getLugarLatLng = async(dir) => {
    
    const encocdedUrl = encodeURI(dir);
console.log(encocdedUrl)


const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encocdedUrl}`,
    headers: {
        'x-rapidapi-key': '3e545bc7a2msh3ac7705a29d70d9p10985cjsnb7a2d0e2e4fa'
    }
});

const resp = await instance.get();

if(resp.data.Results.length === 0){
    throw new Error(`No hay resultado para ${dir}`);
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}