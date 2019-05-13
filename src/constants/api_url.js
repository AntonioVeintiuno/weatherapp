const location = "Mexico,mx";
const api_key = "9093edda048fb38f39b3a91bd9d9e8a4";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;