import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-right-container',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, NgFor],
  templateUrl: './right-container.component.html',
  styleUrl: './right-container.component.css'
})
export class RightContainerComponent {
  
  constructor(public weatherService: WeatherService){};

  // fxn to control tab values: any or tab states

  onTodayClick(){
   this.weatherService.today= true;
   this.weatherService.week= false;
  }

  onWeekClick(){
    this.weatherService.week= true;
    this.weatherService.today= false;
  }

  onCelsiusClick(){
    this.weatherService.celsius= true;
    this.weatherService.fahrenheit= false;
  }

  onFahrenheitClick(){
    this.weatherService.fahrenheit= true;
    this.weatherService.celsius= false;
  }

  faThumbsUp= faThumbsUp;
  faFaceFrown= faFaceFrown;
  faThumbsDown= faThumbsDown;
}
