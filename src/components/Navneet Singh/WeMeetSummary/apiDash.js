import { API } from "../../../config";

export const getAllSpeakers = (id, wemeetid) => {
  return fetch(`${API}/wemeets/${id}/${wemeetid}/allspeakers`, {
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
export const deleteSpeaker = (id, wemeetid, speaker) => {
  return fetch(`${API}/wemeets/${id}/${wemeetid}/removespeakers`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(speaker),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
