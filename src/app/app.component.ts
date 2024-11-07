import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increasBy(value:number):void {
    this.counter += value;
  }

  resetNumber():void{
    this.counter = 10;
  }

}
