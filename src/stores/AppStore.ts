import { observable } from 'mobx';
import ky from 'ky'
import { History, HistoryListenerParameter } from '@reach/router';

interface User {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

interface ApiResponse {
  page: 1
  per_page: 3
  total: 12
  total_pages: 4
}

interface UserResponse extends ApiResponse {
  data: User[]
}

export class AppStore {

  @observable users: User[] = [];
  @observable currentRoute: HistoryListenerParameter

  setupHistory(history: History) {
    console.log(history)
    history.listen((state)=>{
      console.log(state)
      this.currentRoute = state
    })
  }

  loadUsers = async () => {
    const res: UserResponse = await ky.get('https://reqres.in/api/users').json()
    this.users = res.data
  }

}
