const bookmarks = [];
let adding = false;
let error = null;
let filter = 0

function toggleAddingBoolean(){
    this.adding = !this.adding;
};

function addBookmarksToStore(bookmarkArray){
    bookmarkArray.forEach(element => {
        this.bookmarks.push(element);
    });
}

function deleteListItem(id){
    const index = bookmarks.findIndex(item => item.id === id);
    this.bookmarks.splice(index,1);
};

function setFilterVal(val){
    this.filter = val;
};

function toggleExpandForBookmark(id) {
    const foundBookmark = bookmarks.find(bookmark => bookmark.id === id);
    foundBookmark.expanded = !foundBookmark.expanded;
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
    addBookmarksToStore
}