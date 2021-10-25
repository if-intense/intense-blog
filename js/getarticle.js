let response = [];
const first = document.querySelector(".first");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const last = document.querySelector(".last");
const chose = document.getElementById("choose-from");
let allArticles = [];
let currentPage = 1;
let articlePerPage = 10;
let currentArticle;
let filteredData;
let indexOfLastArticle = currentPage * articlePerPage;
let indexOfFirstArticle = indexOfLastArticle - articlePerPage;

fetch("https://i-column.microcms.io/api/v1/post/?limit=100", {
  headers: {
    "X-API-KEY": "b5ed7888-2fb9-4bae-b660-ff9cfe324de4",
  },
})

  .then(function (res) {
    return res.json();
  })
  .then(function (json) {  
    allArticles = json.contents.filter((article) =>  article.site.includes("INTENSE"));

    //Sort
    sortCategory("initial");
  });

//Event Listeners
next.addEventListener("click", () => {
  if (indexOfLastArticle >= filteredData.length) {
    return;
  } else if (currentArticle.length * currentPage < filteredData.length) {
    console.log("Next has been clicked");
    currentPage = currentPage + 1;
    updateCurrentArticle(filteredData);
  } else {
    return;
  }
  // console.log(currentPage, indexOfFirstArticle, indexOfLastArticle);
});
// console.log(currentPage, indexOfFirstArticle, indexOfLastArticle);
previous.addEventListener("click", () => {
  if (currentPage == 1) {
    return;
  } else {
    currentPage = currentPage - 1;
    updateCurrentArticle(filteredData);
  }
});

first.addEventListener("click", () => {
  // console.log("FIRST HAS BEEN CLICKED");
  currentPage = 1;
  updateCurrentArticle(filteredData);
});

last.addEventListener("click", () => {
  const least = Math.ceil(filteredData.length / articlePerPage);
  currentPage = least;
  updateCurrentArticle(filteredData);
});

function updateCurrentArticle(data, initial) {
  console.log("ART::", data.length);
  indexOfLastArticle = currentPage * articlePerPage;
  indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  currentArticle = data.slice(indexOfFirstArticle, indexOfLastArticle);
  initial ? updateDOM(currentArticle, "initial") : updateDOM(currentArticle);
}

function updateDOM(currentArticle, initial) {
  // List item in the DOM
  const itemList = document.getElementById("list");

  //Fragments
  let fragment = document.createDocumentFragment();
  let check = document.createDocumentFragment();

  //Iterate through the current Article length
    currentArticle.forEach(article => {
      response = article;

      let img = document.createElement("img");
      let imgDiv = document.createElement("div");
      imgDiv.className = "img-area col-md-3 col-sm-2 col-2";
      img.src = response.image.url;
      imgDiv.innerHTML = '<img src="' + img.src + '" class="img-fluid">';

      let title = document.createElement("h2");
      title.innerHTML =
        "<a href='https://i-column.com/" +
        response.id +
        "'>" +
        response.title +
        "</a>";

      let postDate = document.createElement("p");
      postDate.innerHTML = response.createdAt.substring(0, 10);

      let category = document.createElement("h5");
      category.innerHTML =
        "<span class='" +
        response.category.id +
        "''>" +
        response.category.name +
        "</span>";

      let body = document.createElement("div");
      body.className = "post-contents";
      body.innerHTML = response.preview;

      let textContents = document.createElement("div");
      textContents.className = "textContents col-md-9 col-sm-10 col-10";
      textContents.appendChild(title);
      textContents.appendChild(postDate);
      textContents.appendChild(category);
      textContents.appendChild(body);

      check.appendChild(textContents);
      //console.log(check, textContents);

      let item = document.createElement("div");
      item.className = "article col-lg-6 row mx-0";
      item.appendChild(imgDiv);
      item.appendChild(check);

      fragment.appendChild(item);
    }
  )

  initial ? itemList.appendChild(fragment) : itemList.replaceChildren(fragment);
}

function sortCategory(init) {
  let selected = chose.value;
  console.log("SELECTED:::", selected);
  currentPage = 1;

  if (selected == chose.childNodes[1].textContent) {
    filteredData = allArticles;
  } else {
    filteredData = allArticles.filter((eachItem) => {
      if (selected == eachItem.category.name) {
        document.getElementById("refresh").style.display = "block";
      } else {
        document.getElementById("refresh").style.display = "block";
      }
      // console.log(selected, eachItem.category.name)
      return eachItem.category.name == selected;
    });
  }

  init
    ? updateCurrentArticle(filteredData, "initial")
    : updateCurrentArticle(filteredData);
  //updateCurrentArticle(filteredData);
  document.getElementById("alert").innerHTML = selected || "";
}

function resetArticles () {
  chose.options[0].selected = true
  filteredData = allArticles
  sortCategory()
}