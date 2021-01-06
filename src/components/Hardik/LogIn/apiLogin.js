import { API } from "../../../config";

export const login = (user) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    })
};
export const signout = ()=>{
  if(typeof window !== 'undefined'){
      localStorage.removeItem('jwt');
      return fetch(`${API}/auth/signout`, {
          method: "GET"
      })
      .then(response=>{
          
      })
      .catch(err=>{
          console.log(err);
      })
  }
}

export const authenticate = (data, next) => {
  if (typeof window != undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
