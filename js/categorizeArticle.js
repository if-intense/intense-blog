fetch("https://i-column.microcms.io/api/v1/categories/?limit=60", {
  headers: {
    "X-API-KEY": "b5ed7888-2fb9-4bae-b660-ff9cfe324de4",
  },
})
  .then(function (res) {
    return res.json();
  })
  .then(function (json) {
    var allProducts = document.createDocumentFragment();
    var selected = document.createDocumentFragment();
    var productOptions = document.createDocumentFragment();

    for (var i = 0; i < json.contents.length; i++) {
      var product = document.createElement("li");
      product.innerHTML = "<span>" + json.contents[i].name + "</span>";

      var selectProduct = document.createElement("span");
      selectProduct.innerHTML = json.contents[i].name;

      var listItems = document.createElement("select");
      listItems.innerHTML =
        '<option value="' +
        json.contents[i].name +
        '">' +
        json.contents[i].name +
        "</option>";

      var selectField = document.createElement("option");

      selectField.appendChild(selectProduct);
      selected.appendChild(selectField);
    }

    document.getElementById("choose-from").appendChild(selected);
  });
  
// function sortCategory() {
//   let sortedCategory = [];
//   let message = [];
//   document.getElementById("alert").innerHTML = "";
//   let selected = document.getElementById("choose-from").value;
//   response.forEach((item) => {
//     if (selected == item.category.name) {
//       sortedCategory.push(item);
//       // console.log(item);
//       let message = selected;
//       document.getElementById("alert").innerHTML = message;
//       document.getElementById("refresh").style.display = "block";
//     } else {
//       // let message = "Not yet Posted";
//       document.getElementById("alert").innerHTML = message;
//       document.getElementById("refresh").style.display = "block";
//     }
//   });

//   var fragment = document.createDocumentFragment();
//   var check = document.createDocumentFragment();
//   for (var i = 0; i < sortedCategory.length; i++) {
//     if (sortedCategory[i].site.includes("INTENSE ホームページ")) {
//       var title = document.createElement("h2");
//       title.innerHTML =
//         "<a href='https://i-column.com/" +
//         sortedCategory[i].id +
//         "'>" +
//         sortedCategory[i].title +
//         "</a>";

//       // added Oct.14 2021
//       var img = document.createElement("img");
//       var imgDiv = document.createElement("div");
//       imgDiv.className = "img-area col-md-3 col-sm-2 col-2";
//       img.src = sortedCategory[i].image.url;
//       imgDiv.innerHTML = '<img src="' + img.src + '" class="img-fluid">';

//       // added Oct. 14 2021
//       var postDate = document.createElement("p");
//       postDate.innerHTML = sortedCategory[i].createdAt.substring(0, 10);

//       var category = document.createElement("h5");
//       category.innerHTML =
//         "<span class='" +
//         sortedCategory[i].category.id +
//         "''>" +
//         sortedCategory[i].category.name +
//         "</span>";

//       var body = document.createElement("div");
//       body.className = "post-contents";
//       body.innerHTML = sortedCategory[i].preview;

//       var textContents = document.createElement("div");
//       textContents.className = "textContents col-md-9 col-sm-10 col-10";
//       textContents.appendChild(title);
//       textContents.appendChild(postDate);
//       textContents.appendChild(category);
//       textContents.appendChild(body);

//       check.appendChild(textContents);
//       // console.log(check);

//       var item = document.createElement("div");
//       item.className = "article col-lg-6 row mx-0";
//       item.appendChild(imgDiv);
//       item.appendChild(check);

//       fragment.appendChild(item);
//       // console.log(fragment);
//     }
//   }
//   document.getElementById("list").innerHTML = "";
//   document.getElementById("list").appendChild(fragment);
// }
