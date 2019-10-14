const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/bd2b31a2b94a7c9c376772c55f3e9467/' + latitude + ',' + longitude

    request.get({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather API.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const { temperature, precipProbability } = body.currently
            const { summary, temperatureMin, temperatureMax } = body.daily.data[0]
            const message = summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + ' % chance of rain.' +
                ' Max temp : ' + temperatureMax + ' and min temp: ' + temperatureMin + '.'
            callback(undefined, message)
        }
    })
}


module.exports = forecast