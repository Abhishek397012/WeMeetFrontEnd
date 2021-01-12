import { API } from "../../../config";

export const getWeMeet = (userId, wemeetId) => {
  return fetch(`${API}/wemeets/${userId}/${wemeetId}/summary`, {
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
