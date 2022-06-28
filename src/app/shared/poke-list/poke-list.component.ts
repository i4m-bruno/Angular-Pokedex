import { Component, OnInit } from '@angular/core';
import { PokeListApiService } from '../../service/poke-list-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  constructor(private pokeListApiService: PokeListApiService) {}

  ngOnInit(): void {
    this.pokeListApiService.apiListAllPokemons.subscribe((res) => res);
  }
}
