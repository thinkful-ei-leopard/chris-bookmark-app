const STORE = {
    bookmarks: [
      {
        id: 'x56w',
        title: 'Title 1',
        rating: 3,
        url: 'http://www.title1.com',
        description: 'lorem ipsum dolor sit',
        expanded: false
      },
      {
        id: '6ffw',
        title: 'Title 2',
        rating: 5,
        url: 'http://www.title2.com',
        description: 'dolorum tempore deserunt',
        expanded: false
      } 
    ],
    adding: false,
    error: null,
    filter: 0
  };

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
  }

  function generateAddBookmarkView(){
      return `<form id="add-bookmark-form" action="" method="post">
      <label for="url-input">Add new Bookmark Url:</label>
      <input type="url" id="url-input">
      <div class="bookmark-info">
          <input type="text" id="title-input" placeholder="Bookmark Title">
          <div class="rating">
              <span class="fa fa-star"><input type="radio" name="rating" id="str5" value="5"><label for="str5"></label></span>
              <span class="fa fa-star"><input type="radio" name="rating" id="str4" value="4"><label for="str4"></label></span>
              <span class="fa fa-star"><input type="radio" name="rating" id="str3" value="3"><label for="str3"></label></span>
              <span class="fa fa-star"><input type="radio" name="rating" id="str2" value="2"><label for="str2"></label></span>
              <span class="fa fa-star"><input type="radio" name="rating" id="str1" value="1"><label for="str1"></label></span>
          </div>
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
        <p class="description">${bookmark.description}</p>
        <a href="${bookmark.url}">Visit Site</a>
    </div>`;
    }
    
    return `<li class="bookmark" id="${bookmark.id}">
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
        const bookmarkListString = generateBookmarkListString(bookmarks);
        const initialView = generateInitialView();
        $('main').html(initialView);
        $('#bookmark-list').html(bookmarkListString);
     } else if (STORE.adding === true){
        const addBookmarkView = generateAddBookmarkView();
        $('main').html(addBookmarkView);
     }
  }

  function addBookmark(){
    //When #add-button is clicked, render Add Bookmark Form View
    $('.initial-view').on('click','#add-button', event => {
        STORE.adding = true;
        render();
    });
  }

  function detailedView(){
    //When bookmark is clicked, render the expanded view of the selected bookmark
  }

  function removeBookmark(){
    //When #delete-button is clicked, remove the selected bookmark
  }

  function minimumRatingFilter(){
    //When option is selected, only display bookmarks with that rating or higher
  }

  function main(){
      render();
      addBookmark();
      detailedView();
      removeBookmark();
      minimumRatingFilter();
  }

  $(main);