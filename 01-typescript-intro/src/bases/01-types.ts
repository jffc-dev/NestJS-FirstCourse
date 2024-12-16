export let name = 'Javier FLores'
export const age: number = 22
export const isValid: boolean = true

name = 'Fernando'

export const pokemonIds: number[] = [1,20,12,33]
pokemonIds.push('data')

export interface Pokemon {
    id: number
    name: string
    age?: number
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'pikachu'
}

export const charmander: Pokemon = {
    id: 2,
    name: "charmander",
    age: 23
}

// console.log(pikachu)
// console.log(charmander)

export const pokemons: Pokemon[] = []
pokemons.push(pikachu, charmander)

console.log(pokemons)

