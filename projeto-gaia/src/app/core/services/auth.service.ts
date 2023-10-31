import { Injectable } from '@angular/core';
import  axios  from 'axios';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api/v1/auth';

  constructor() { }
  login(email: string, password: string) {
    return axios.post(`${this.apiUrl}/login`, { email, password });
  }
  register(name: string, email: string, password: string) {
    return axios.post(`${this.apiUrl}/register`, { name, email, password });
  }
  logout() {
    return axios.post(`${this.apiUrl}/logout`);
  }
  me() {
    return axios.get(`${this.apiUrl}/me`);
  }
  update(name: string, email: string, password: string) {
    return axios.put(`${this.apiUrl}/update`, { name, email, password });
  }
  delete() {
    return axios.delete(`${this.apiUrl}/delete`);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }
}
