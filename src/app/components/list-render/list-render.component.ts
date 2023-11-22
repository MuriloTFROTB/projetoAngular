import { Component } from '@angular/core';
import { Animal } from '../../animal';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {}

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
  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
