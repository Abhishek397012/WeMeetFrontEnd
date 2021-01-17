import {API} from '../../../config'

export const getMeet = (id, wemeetId) => {
    return fetch(`${API}/wemeets/${id}/${wemeetId}/summary`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };
export const getHost = (id) => {
    return fetch(`${API}/users/host/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };