import {API} from '../../../config'


export const login = (user)=>{
    console.log(user.name, user.fid);
    return fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json', 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err);
    })
}