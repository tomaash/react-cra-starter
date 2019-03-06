import { observable } from 'mobx';
import axios from 'axios';
import { BrowserNavigation, Route } from 'navi';

interface User {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

export class AppStore {

  @observable users: User[] = [];
  @observable currentRoute: Route<any>

  setupNavigation(navigation) {
    navigation.subscribe((route) => {
      this.currentRoute = route
    })
  }

  loadUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    this.users = res.data.data
  }

}
