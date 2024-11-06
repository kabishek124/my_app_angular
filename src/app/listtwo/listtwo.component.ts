import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FruitsServiceService } from '../fruits-service.service';

@Component({
  selector: 'app-listtwo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listtwo.component.html',
  styleUrl: './listtwo.component.css'
})
export class ListtwoComponent implements OnInit{
  fruits : any[] = [];

  constructor(private fruitService : FruitsServiceService){}

  ngOnInit(): void {
      this.fruitService.fruitList$.subscribe((data) => {
        this.fruits = data;
      })
  }
}
