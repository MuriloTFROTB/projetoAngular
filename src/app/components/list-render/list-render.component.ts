import { Component } from '@angular/core';
import { Animal } from '../../animal';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  constructor(private listService: ListService) {
    this.getAnimals();
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animals)=>(this.animals=animals));
  }

  animals: Animal[] = [];
  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos`;
  }
  removeAnimal(animal: Animal) {
    console.log('removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
