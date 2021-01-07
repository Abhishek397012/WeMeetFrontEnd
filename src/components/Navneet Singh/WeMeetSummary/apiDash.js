import { API } from "../../../config";

export const getAllSpeakers = (id) => {
  return fetch(`${API}/wemeets/${id}/allspeakers`, {
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
