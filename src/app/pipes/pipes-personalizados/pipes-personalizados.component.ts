import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-pipes-personalizados',
  templateUrl: './pipes-personalizados.component.html',
  styleUrls: ['./pipes-personalizados.component.css']
})


//ng g pipe/nombre

export class PipesPersonalizadosComponent {


  array:number[] = [1,2,3,4,5,6,7];


}
