import { API } from "../../../config";
export const createWeMeet = (id, wemeet) => {
  return fetch(`${API}/wemeets/${id}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wemeet),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
