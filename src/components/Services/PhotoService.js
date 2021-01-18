import axios from 'axios';


export default async function getAllPhotos() {
  return await axios.get('https://jsonplaceholder.typicode.com/photos');
}