import STORE from './store.js';
import api from './api.js'

function generateInitialView(){
    return `<section class="initial-view">
    <div class="book-controls">
        <button id="add-button">Add Boomark</button>
        <select name="filter" id="filter">
            <option value="0">Minimum Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
        </select>
    </div>
    <ul id="bookmark-list">

    </ul>
    </section>`;
};

function generateAddBookmarkView(){
    return `
    <form id="add-bookmark-form" action="">
        <label for="url-input">Add new Bookmark Url:</label>
        <input type="url" id="url-input">
        <div class="bookmark-info">
            <input type="text" id="title-input" placeholder="Bookmark Title">
            <input type="number" id="rating"-input min="1" max="5">
            <input type="text" id="description-input" placeholder="Add a description (optional)">
            <div id="form-buttons">
                <button id="cancel-button">Cancel</button>
                <button id="create-button">Create</button>
            </div>
        </div>
    </form>`
};

const generateBookmarkElement = function(bookmark){
    let expandedView = '';

    if(bookmark.expanded){
        expandedView = `<div class="expanded-view">
        <p class="description">${bookmark.desc}</p>
        <a href="${bookmark.url}">Visit Site</a>
    </div>`;
    }
    
    return `<li class="bookmark" data-item-id="${bookmark.id}">
    <p class="title">${bookmark.title}</p>

    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>

    <button id="delete-button">Delete Bookmark</button>
    ${expandedView}
    </li>`
}

const generateBookmarkListString = function (bookmarkList){
    const bookmarks = bookmarkList.map(bookmark => generateBookmarkElement(bookmark));
    return bookmarks.join('');
}



function render(){
    if(STORE.adding === false){
        let bookmarks = [...STORE.bookmarks]
        
    if(STORE.filter > 0){
        bookmarks = STORE.bookmarks.filter(bookmark => bookmark.rating >= STORE.filter);
    }

    const bookmarkListString = generateBookmarkListString(bookmarks);
    const initialView = generateInitialView();
    $('main').html(initialView);
    $('#bookmark-list').html(bookmarkListString);
    } else if (STORE.adding === true){
        const addBookmarkView = generateAddBookmarkView();
        $('main').html(addBookmarkView);
    }
}

function addBookmarkButton(){
    //When #add-button is clicked, render Add Bookmark Form View
    $('main').on('click','#add-button', event => {
        STORE.toggleAddingBoolean();
        render();
    });
}

function getBookmarkIdFromElement(item) {
    return $(item)
    .closest('.bookmark')
    .data('item-id');
};
  
function clickToExpandView(){
    //When bookmark is clicked, render the expanded view of the selected bookmark
    $('main').on('click', '.bookmark', event => {
        const id = getBookmarkIdFromElement(event.currentTarget);
        STORE.toggleExpandForBookmark(id);
        render();
    });
}

function handleDeleteButton(){
    //When #delete-button is clicked, remove the selected bookmark
    $('main').on('click', '#delete-button', event => {
        const id = getBookmarkIdFromElement(event.currentTarget);
        api.deleteBookmark(id);
        STORE.deleteListItem(id);
        render();
    });
}

function handleCancelButton(){
    //When #cancel-button is clicked, go back to initial view
    $('main').on('click','#cancel-button', event => {
        event.preventDefault();
        
        STORE.toggleAddingBoolean();
        render();
    });
}

function minimumRatingFilter(){
    //When option is selected, only display bookmarks with that rating or higher
    $('main').on('click', '#filter', event => {
        let value = $('#filter').val();
        STORE.setFilterVal(value);
        render();
    });
}

function handleNewBookmarkForm(){
    $('main').on('submit', '#add-bookmark-form', event => {
        event.preventDefault();

        const title = $('#title-input').val();
        const url = $('#url-input').val();
        const desc = $('#description-input').val();
        const rating = $('#rating-input').val();

        api.createBookmark(title,url,desc,rating);
        STORE.toggleAddingBoolean();
        render();
    });
}



function main(){
    api.getBookmarks()
    .then(response => {
        if (response.ok === true){
            return response.json();
        }
        throw new Error('Bad response')
        //Make better error response later
    })
    .then(bookmarks => {
        STORE.addBookmarksToStore(bookmarks)
        render()
    });
    render();
    addBookmarkButton();
    clickToExpandView();
    handleDeleteButton();
    handleCancelButton();
    minimumRatingFilter();
    handleNewBookmarkForm();
}

$(main);