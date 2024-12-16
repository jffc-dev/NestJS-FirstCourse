import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
    
    get imageUrl(){
        return `data:${this.name}`
    }
    constructor(public id: number,
        public name: string){
    }
    public getFr(){
        return 6
    }
    async getMoves(){
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }
}

export const charmander = new Pokemon(1, 'pikachu')
console.log(await charmander.getMoves())