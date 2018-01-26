import { Injectable } from '@angular/core';
import { WEATHER_DATA} from './weather-item-data';
import { Http} from '@angular/Http';
import {Observable} from 'rxjs/Observable';
import { WeatherItemDS} from './weather-item';
import 'rxjs/Rx';

@Injectable()
export class WeatherServiceService {
  getWeatherList() {
    return WEATHER_DATA;
  }
  constructor(private _http: Http) { }
  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
     '&APPID=fb39800272f5cdc2a26378e27d1dcfd9&units=metric')
      .map(response => response.json())
      .catch( error => {
        console.error(error);
        return Observable.throw(error.json());
      });
      }

    addWeatherItem(data: WeatherItemDS) {
      WEATHER_DATA.push(data);

    }

    removeWeatherItem(weatherItemtoDel: WeatherItemDS) {
      var updatedWeatherArr = [];
      updatedWeatherArr = WEATHER_DATA.filter( (elm, index) => {
          if (elm !== weatherItemtoDel) {
            WEATHER_DATA[index] = elm;
          } else {
            WEATHER_DATA.splice(index, 1);
          }
          return elm;
      });
    }


}
