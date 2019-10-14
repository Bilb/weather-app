const request = require('request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXVkcmljYWNrZXJtYW5uIiwiYSI6ImNrMWxpZWpscjA2MnIzbHA3dHQ5cThlcHEifQ.zkBO7MGU8tgsoz84PtL-qw&limit=1'
    request.get({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to geocoding API', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try again with different search terms.', undefined)
        } else {
            callback(null, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode