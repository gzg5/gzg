import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'GUOTAO' },
      { id: 2, name: 'LV' },
      { id: 3, name: 'GT' },
      { id: 4, name: 'LMY' },
      { id: 5, name: 'DENG' },
      { id: 6, name: 'CAO' },
      { id: 7, name: 'MZH' },
      { id: 8, name: 'ZQC' },
      { id: 9, name: 'DRF' },
      { id: 10, name: 'SSS' },
      {id:11,name:'HHH'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}