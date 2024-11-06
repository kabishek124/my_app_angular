import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitsServiceService } from '../fruits-service.service';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-formtwo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formtwo.component.html',
  styleUrl: './formtwo.component.css'
})
export class FormtwoComponent {
  fruitName : string = '';
  fruitPrize : number = 0;

  constructor(private fruitService : FruitsServiceService){}

  onFormSubmit(){
    this.fruitService.addFruits({fruitName : this.fruitName, fruitPrize : this.fruitPrize});
    this.fruitName = '';
    this.fruitPrize = 0;
  }

}
