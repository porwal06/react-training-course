import { redirect } from "react-router-dom";

export function setAuthToken(token) {
    localStorage.setItem('token', token);
}

export function getAuthToken() {
   return localStorage.getItem('token');
}

export function removeAuthToken() {
    return localStorage.removeItem('token');
}

export function tokenLoader(){
    const token = getAuthToken();
    if(!token){
        return null;
    }
    return token;
}

export function checkLoader() {
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }
    return null;
}