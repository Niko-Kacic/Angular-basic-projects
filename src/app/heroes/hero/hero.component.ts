import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName():void {
    this.name = 'Bucky';
  }

  changeHeroAge():void {
    this.age = 30;
  }
}
