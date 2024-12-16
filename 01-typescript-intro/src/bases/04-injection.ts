import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'
import { PokeApiAdapter } from '../api/pokeApi.adapter'

export class Pokemon {
    
    get imageUrl(){
        return `data:${this.name}`
    }
    constructor(
        public id: number,
        public name: string,
        private readonly http: PokeApiAdapter
    ){}

    public getFr(){
        return 6
    }
    async getMoves(){
        const {data} = await this.http.get('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }
}

const pokeApi = new PokeApiAdapter()
export const charmander = new Pokemon(1, 'pikachu', pokeApi)
console.log(await charmander.getMoves())