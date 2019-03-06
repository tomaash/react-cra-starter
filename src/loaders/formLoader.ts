import Axios from "axios";

export const loadUsers = async () => {
  const res = await Axios.get('https://reqres.in/api/users')
  return res.data
}
