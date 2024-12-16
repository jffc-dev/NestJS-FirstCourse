import axios from 'axios'

export class PokeApiAdapter {

    private readonly axios = axios;

    async get(url: string){
        const rsp = await this.axios.get(url)
        return rsp
    }

    async post(url: string, data: any){
        
    }

    async put(url: string, data: any){
        
    }

    async patch(url: string, data: any){
        
    }

    async delete(url: string){

    }
}