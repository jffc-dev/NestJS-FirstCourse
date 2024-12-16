import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'
import { HttpAdapter, PokeApiAdapter, PokeApiFectchAdapter } from '../api/pokeApi.adapter'

export class Pokemon {
    
    get imageUrl(){
        return `data:${this.name}`
    }
    constructor(
        public id: number,
        public name: string,
        private readonly http: HttpAdapter
    ){}

    public getFr(){
        return 6
    }
    async getMoves(){
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }
}

const pokeApi = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFectchAdapter()
export const charmander = new Pokemon(1, 'pikachu', pokeApiFetch)
console.log(await charmander.getMoves())