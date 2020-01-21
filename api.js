
//GET bookmarks
function getBookmarks(){
    return fetch(`https://thinkful-list-api.herokuapp.com/chris/bookmarks`);
}

//POST bookmarks
function createBookmark(title, url, desc, rating){
    let newBookmark = {
        title,
        url,
        desc,
        rating
    };
    newBookmark = JSON.stringify(newBookmark);
    
    return fetch(`https://thinkful-list-api.herokuapp.com/chris/bookmarks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: newBookmark});
}

//DELETE bookmark
function deleteBookmark(id){
    return fetch(`https://thinkful-list-api.herokuapp.com/chris/bookmarks/${id}`,
    {
        method: 'DELETE'
    });
}

export default {
    getBookmarks,
    createBookmark,
    deleteBookmark
}