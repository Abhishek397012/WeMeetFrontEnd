import { API } from "../../../config";

export const getRegistrants = (userId, wemeetId) => {
  return fetch(`${API}/wemeets/${userId}/${wemeetId}/allregistrants`, {
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
