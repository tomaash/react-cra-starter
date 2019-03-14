import { observable } from 'mobx';
import axios from 'axios';
import { History, HistoryListenerParameter } from '@reach/router';

interface User {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

export class AppStore {

  @observable users: User[] = [];
  @observable currentRoute: HistoryListenerParameter

  // setupNavigation(navigation) {
  //   navigation.subscribe((route) => {
  //     this.currentRoute = route
  //   })
  // }

  setupHistory(history: History) {
    console.log(history)
    history.listen((state)=>{
      console.log(state)
      this.currentRoute = state
    })
    // navigation.subscribe((route) => {
    //   this.currentRoute = route
    // })
  }

  loadUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    this.users = res.data.data
  }

}
