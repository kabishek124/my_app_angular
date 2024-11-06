import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName: string = '';
  carPrice: number = 0;
  @Output() carDetailsEmitter = new EventEmitter<{ name: string, price: number }>();
  onFormSubmit() {
    console.log(`Car Name: ${this.carName}, Car Price: ${this.carPrice}`);
    this.carDetailsEmitter.emit({ name: this.carName, price: this.carPrice });
    this.carName = '';
    this.carPrice = 0;
  }
}
