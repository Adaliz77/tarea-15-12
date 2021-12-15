import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name:string = "angular";
  name2:string = 'TYPESCRIPT';

  array:string[]=['ada', 'barbara', 'laura'];

  //sintaxis {{valorpi | number:N1.N2-N3}}
  //N1 = 1 cantidad de números enteros
  //N2 = 0 cantidad mínima de numeros decimales
  //N3 = 3 cantidad máxima de números decimales
  valorpi:number=3.141592;

  //{{myNum | percent: '(string con 3 valores numericos)}}
  // N1.N2-N3'}}
  //N1 = 1 --> cantidad de numeros enteros (valor por defecto)
  //N2 = 0 --> cantidad minima de numeros decimales (valor por defecto)
  //N3 = 0 --> cantidad maxima de numeros decimales (valor por defecto)
  myNum= 0.589;

  //{{myVariable | currency: 'currencyCharacter':'symbol/code':N1.N2-N3'}}
  salary = 3500.5;

  personaje={
    name:'Mr. Bean',
    alias: 'Bean',
    song: 'Toxicity',
    skills: ['eidetic memory', 'make people nervous'],
    youtubeChannel: 'Fun With Flags',
    address: {
      street: 'Elm Street',
      number: 3,
      city: 'Liverpol'
    }
  };

  promiseValue= new Promise((resolve, rejects)=>{
    setTimeout(()=>{
      resolve('Esto funciona');
    }, 3000);
  });

  myDate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
