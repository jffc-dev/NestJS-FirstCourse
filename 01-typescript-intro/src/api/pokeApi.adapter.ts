import axios from 'axios'

export interface HttpAdapter {
    get<T>(url: string): Promise<T>
    // post<T>(url: string, data: any): Promise<T>
    // put<T>(url: string, data: any): Promise<T>
    // patch<T>(url: string, data: any): Promise<T>
    // delete<T>(url: string): Promise<T>
}

export class PokeApiFectchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T>{
        const resp = await fetch(url)
        const data: T = await resp.json()
        return data
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T>{
        const {data} = await this.axios.get<T>(url)
        return data
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