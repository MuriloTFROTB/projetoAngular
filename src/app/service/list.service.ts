import { Injectable } from '@angular/core';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}
  remove(animais: Animal[], animal: Animal) {
    return animais.filter((a) => animal.name !== a.name);
  }
}
