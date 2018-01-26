import { Component, OnInit } from '@angular/core';
import { WeatherServiceService} from '../weather-item/weather-service.service';
import { WeatherItemDS} from '../weather-item/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.css']

})


export class WeatherSearchComponent {
  constructor (public _srvcCaller: WeatherServiceService){}

  onSubmit(f) {
    console.log(f);
    this._srvcCaller.searchWeatherData(f.location)
      .subscribe(
        data => {
          const weathItem = new WeatherItemDS(data.name, data.weather[0].description, data.main.temp);
          this._srvcCaller.addWeatherItem(weathItem);
        }
      )

  }
}
