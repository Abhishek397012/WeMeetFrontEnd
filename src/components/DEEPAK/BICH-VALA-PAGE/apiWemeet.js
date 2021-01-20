import {API} from  '../../../config'

export const getWemeet = (id, uid) => {
    return fetch(`${API}/wemeets/${uid}/${id}/summary`, {
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