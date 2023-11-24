import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../service/list.service';

import { Animal } from '../../animal';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css',
})
export class ItemDetailsComponent {
  animal?: Animal;
  constructor(
    private listService: ListService,
    private router: ActivatedRoute
  ) {
    this.getAnimal();
  }
  getAnimal() {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
