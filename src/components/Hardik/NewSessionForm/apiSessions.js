import { API } from "../../../config";

export const createSession = (formValues) => {
  const { hostId, wemeetId } = formValues;

  return fetch(`${API}/wemeets/${hostId}/${wemeetId}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log);
};

export const getAllSessions = (hostId, wemeetId) => {
  return fetch(`${API}/wemeets/${hostId}/${wemeetId}/allsessions`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log);
};
