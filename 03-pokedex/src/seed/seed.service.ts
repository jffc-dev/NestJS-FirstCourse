import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}

  private readonly axios = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    data.results.map((item) => {
      const segments = item.url.split('/');
      const no = +segments[segments.length - 2];
    });

    this.pokemonService.createMany(data.results);

    return data.results;
  }
}
