const https = require('https');
const location = process.argv.slice(2).join('+');

try{
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?APPID=449605309b7cc1c4dab96ca2b913cf15&q=${location}`,
    (response)=> {
        var resBody = "";
        response.on('data', (data)=>{
            resBody += data;
        })
        response.on('end', ()=>{
            try{
                var weather = JSON.parse(resBody);
                console.log(`${weather.name} has a temperature of ${weather.main.temp} fahrenheit.`);
            }
            catch
            {
                console.log(`Error (${weather.cod}):`,weather.message);
            }
        })
        
    }).on('error', (error) => {
        console.error('Request error: ',error.message);
    });
}
catch(error)
{
    console.log('Request error: ',error.message);
}




