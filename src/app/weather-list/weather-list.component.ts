import { Component, OnInit } from '@angular/core';
import { WeatherItemDS } from '../weather-item/weather-item';
import { WEATHER_DATA} from '../weather-item/weather-item-data';
import { WeatherServiceService} from '../weather-item/weather-service.service';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styles: []
})
export class WeatherListComponent implements OnInit {
  public weather_elements: WeatherItemDS[];
  constructor(public _weatherSRV: WeatherServiceService) {
   }

   ngOnInit() {
    this.weather_elements = this._weatherSRV.getWeatherList();
   }

}
