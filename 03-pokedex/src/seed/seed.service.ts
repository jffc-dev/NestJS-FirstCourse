import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonService: PokemonService) {}

  private readonly axios = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20',
    );

    const newData: CreatePokemonDto[] = data.results.map((item) => {
      const segments = item.url.split('/');
      const no = +segments[segments.length - 2];
      return { name: item.name, no };
    });

    this.pokemonService.createMany(newData);

    return data.results;
  }
}
