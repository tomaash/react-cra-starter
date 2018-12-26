import { observable } from 'mobx';
import axios from 'axios';
import { type } from 'os';

interface Merchant {
    name: string
    headline: string
    description: string,
    _links: {
        self: {
            href: string
        }
    }
}

export class AppStore {

    @observable merchants: Merchant[] = [];

    loadMerchants = async () => {
        const res = await axios.get('http://localhost:8080/catalog/data/merchants')
        this.merchants = res.data._embedded.merchants;
    }

}
