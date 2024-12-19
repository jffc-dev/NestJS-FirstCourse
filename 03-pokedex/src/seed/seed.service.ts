import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  private readonly axios = axios;

  async executeSeed() {
    await this.pokemonModel.deleteMany();

    const pokemonsToInsert: Pick<Pokemon, 'name' | 'no'>[] = [];

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    data.results.forEach((item) => {
      const segments = item.url.split('/');
      const no = +segments[segments.length - 2];

      pokemonsToInsert.push({ name: item.name, no });
    });

    const insertResult = await this.pokemonModel.insertMany(pokemonsToInsert);

    return insertResult;
  }
}
