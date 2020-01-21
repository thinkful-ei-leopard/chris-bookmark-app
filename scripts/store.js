//import api from './scripts/api.js'

const bookmarks = [
    {
      id: cuid(),
      title: 'Google',
      rating: 3,
      url: 'http://www.google.com',
      description: 'All of your searching needs',
      expanded: false
    },
    {
      id: cuid(),
      title: 'Youtube',
      rating: 5,
      url: 'http://www.youtube.com',
      description: 'Site full of videos',
      expanded: false
    } 
  ];
  let adding = false;
  let error = null;
  let filter = 0

// function setAddingToTrue(){
//     adding = true;
// }

export default {
    bookmarks,
    adding,
    error,
    filter,
    //setAddingToTrue
}