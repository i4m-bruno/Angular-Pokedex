import { Component, OnInit } from '@angular/core';
import { PokeListService } from '../../service/poke-list-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  constructor(private pokeListService: PokeListService) {}

  ngOnInit(): void {
    this.pokeListService.apiListAllPokemons.subscribe((res) => res);
  }
}
