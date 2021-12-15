import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  @Input()
  nombre!:string;//el ! no le estamos pasando ningun parametro por default

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios');
  }

  ngOnInit(): void {
  }

}
