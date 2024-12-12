import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BryggenByge';
  search: string = '';
  results: string = '';
  weatherData: any;
  imageUrl: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.searchFor();
  }
  searchFor = () => {
    this.results = `Henter værforholdene...`;

    this.weatherService.getWeather().subscribe((data) => {
      this.weatherData = data;
      if (this.weatherData && this.weatherData.current) {
        this.setWeatherImage();
        this.results = `Været ved Bryggen er nå ${this.getWeatherDescription()}`;
        console.log(this.weatherData);
      } else {
        this.results = 'Værforholdene er ikke tilgjengelige';
      }
    });
  }

  setWeatherImage = () => {
    const weatherCode = this.weatherData.current.weather_code;
    const isDay = this.weatherData.current.is_day;
    this.imageUrl = this.weatherService.getWeatherImage(weatherCode, isDay);
  }

  getWeatherDescription = (): string => {
    const weatherCode = this.weatherData.current.weather_code;
    const isDay = this.weatherData.current.is_day;
    const descriptions = {
      0: { day: 'klar himmel', night: 'klar himmel natt' },
      1: { day: 'hovedsakelig klar', night: 'hovedsakelig klar natt' },
      2: { day: 'delvis skyet', night: 'delvis skyet natt' },
      3: { day: 'overskyet', night: 'overskyet natt' },
    };

    const description = descriptions[weatherCode as keyof typeof descriptions];
    return description ? (isDay ? description.day : description.night) : 'Ukjent værforhold';
  }
}