import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=60.397076&longitude=5.324383&current=temperature_2m,is_day,weather_code&forecast_days=1';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getWeatherImage(weatherCode: number, isDay: boolean): string {
    const weatherImages = {
      0: { day: 'http://openweathermap.org/img/wn/01d@2x.png', night: 'http://openweathermap.org/img/wn/01n@2x.png' },
      1: { day: 'http://openweathermap.org/img/wn/01d@2x.png', night: 'http://openweathermap.org/img/wn/01n@2x.png' },
      2: { day: 'http://openweathermap.org/img/wn/02d@2x.png', night: 'http://openweathermap.org/img/wn/02n@2x.png' },
      3: { day: 'http://openweathermap.org/img/wn/03d@2x.png', night: 'http://openweathermap.org/img/wn/03n@2x.png' },
      45: { day: 'http://openweathermap.org/img/wn/50d@2x.png', night: 'http://openweathermap.org/img/wn/50n@2x.png' },
      48: { day: 'http://openweathermap.org/img/wn/50d@2x.png', night: 'http://openweathermap.org/img/wn/50n@2x.png' },
      51: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      53: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      55: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      56: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      57: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      61: { day: 'http://openweathermap.org/img/wn/10d@2x.png', night: 'http://openweathermap.org/img/wn/10n@2x.png' },
      63: { day: 'http://openweathermap.org/img/wn/10d@2x.png', night: 'http://openweathermap.org/img/wn/10n@2x.png' },
      65: { day: 'http://openweathermap.org/img/wn/10d@2x.png', night: 'http://openweathermap.org/img/wn/10n@2x.png' },
      66: { day: 'http://openweathermap.org/img/wn/10d@2x.png', night: 'http://openweathermap.org/img/wn/10n@2x.png' },
      67: { day: 'http://openweathermap.org/img/wn/10d@2x.png', night: 'http://openweathermap.org/img/wn/10n@2x.png' },
      71: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      73: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      75: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      77: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      80: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      81: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      82: { day: 'http://openweathermap.org/img/wn/09d@2x.png', night: 'http://openweathermap.org/img/wn/09n@2x.png' },
      85: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      86: { day: 'http://openweathermap.org/img/wn/13d@2x.png', night: 'http://openweathermap.org/img/wn/13n@2x.png' },
      95: { day: 'http://openweathermap.org/img/wn/11d@2x.png', night: 'http://openweathermap.org/img/wn/11n@2x.png' },
      96: { day: 'http://openweathermap.org/img/wn/11d@2x.png', night: 'http://openweathermap.org/img/wn/11n@2x.png' },
      99: { day: 'http://openweathermap.org/img/wn/11d@2x.png', night: 'http://openweathermap.org/img/wn/11n@2x.png' }
    };

    const weatherInfo = weatherImages[weatherCode as keyof typeof weatherImages];
    return weatherInfo ? (isDay ? weatherInfo.day : weatherInfo.night) : 'unknown.png';
  }
}