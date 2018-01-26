import { Component, OnInit, Input } from '@angular/core';
import { WeatherItemDS} from './weather-item';
import { WEATHER_DATA} from './weather-item-data';
import { WeatherServiceService} from './weather-service.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styles: []
})
export class WeatherItemComponent {

  constructor(private weatherService: WeatherServiceService) {}
  // tslint:disable-next-line:no-input-rename
  @Input('item') weatherItem: WeatherItemDS;
  public cityName: any;
  onCardClose(event: Event) {
    var itemToDel = this.weatherItem;
   this.weatherService.removeWeatherItem(itemToDel);
  }

}
