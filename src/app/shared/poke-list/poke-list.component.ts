import { Component, OnInit } from '@angular/core';
import { PokeListService } from '../../service/poke-list-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  //
  private setterPokemon: any;
  public pokemonsList: any;
  constructor(private pokeListService: PokeListService) {}

  ngOnInit(): void {
    this.pokeListService.apiListAllPokemons.subscribe((res) => {
      this.setterPokemon = res.results;
      this.pokemonsList = this.setterPokemon;
    });
  }

  public getSearch(value: string) {
    const filter = this.setterPokemon.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.pokemonsList = filter;
  }
}
