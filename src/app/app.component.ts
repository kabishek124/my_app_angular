import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './Counter/Counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ListtwoComponent } from './listtwo/listtwo.component';
import { FormtwoComponent } from './formtwo/formtwo.component';

@Component({
  selector: 'app-abi',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule, FormsModule, FormComponent, ListComponent, ListtwoComponent, FormtwoComponent],
  templateUrl: './app.component.html',
  //template: "{{hi}}",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app_angular';
  selector = 'app-abi';
  hi = 'hi';
  img = "https://picsum.photos/200/300";
  alt = "Image"
  prime = 0;
  date = new Date();
  isPrime(): boolean {
    if (this.prime < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(this.prime); i++) {
      if (this.prime % i === 0) {
        return false;
      }
    }
    return true;
  }

  // fruits = [
  //   {
  //     name: 'Apple',
  //     price: 100
  //   },
  //   {
  //     name: 'Orange',
  //     price: 200
  //   },
  //   {
  //     name: 'Banana',
  //     price: 300
  //   }
  // ]

  cars: { name: string; price: number }[] = [];


  onCarDetailsEmitted(carDetails: { name: string, price: number }) {
    console.log(`Car Name: ${carDetails.name}, Car Price: ${carDetails.price}`);
    this.cars.push(carDetails);
  }
}