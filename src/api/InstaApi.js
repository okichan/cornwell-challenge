import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=7383405779.f9a1561.b71e51f25f054cfb8337cf072830af47'
})

export function fetchPhotos() {
  return api.get().then(res => {
    return res.data.data;
  });
}
