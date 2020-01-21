const store = {
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

  function render(){
     
  }

  function addBookmark(){
    //When #add-button is clicked, render Add Bookmark Form View
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