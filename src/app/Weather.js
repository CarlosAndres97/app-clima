export class Weather{
    constructor(city, countryCode){
        this.apikey = '8290d446bcf272a083b1c5cf83dd3844';
        this.city = city;
        this.countryCode = countryCode;
    }
    async  getWeather(){
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}