const data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            county: 'India',
        }
    ]
}

const cityData = data.location[0].city;
console.log(cityData);