import {API} from '../../../config'


export const login = (user)=>{
    console.log(user.name, user.fid);
    const url="http://localhost:8000/api/auth/login";
    return fetch((url), {
        method: "POST",
        headers: {
            Accept: 'application/json', 
            "Content-Type": "application/json", 
            "Access-Control-Allow-Origin": "*"
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