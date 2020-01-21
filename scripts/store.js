import api from './api.js'

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

function toggleAddingBoolean(){
    this.adding = !this.adding;
}

function deleteListItem(id){
    const index = this.bookmarks.findIndex(item => item.id === id);
    this.bookmarks.splice(index,1);
}

function setFilterVal(val){
    this.filter = val;
}

function toggleExpandForBookmark(id) {
    const foundBookmark = this.bookmarks.find(bookmark => bookmark.id === id);
    foundBookmark.expanded = !foundBookmark.expanded;
};

function getBookmarkIdFromElement(item) {
    return $(item)
      .closest('.bookmark')
      .data('item-id');
};

export default {
    bookmarks,
    adding,
    error,
    filter,
    toggleAddingBoolean,
    deleteListItem,
    setFilterVal,
    toggleExpandForBookmark,
    getBookmarkIdFromElement
}