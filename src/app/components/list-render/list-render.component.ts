import { Component } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor() {}

  animals: Animal[] = [
    { name: 'turca', type: 'Dog', age: 1 },
    { name: 'Tom', type: 'Cat', age: 4 },
    { name: 'Frida', type: 'Dog', age: 6 },
    { name: 'Bob', type: 'Horse', age: 7 },
  ];
  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos`;
  }
}
