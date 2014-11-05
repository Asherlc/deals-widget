var steepandcheapData,
    body,
    image;

retriever = new DEALS.Retreiver("steepandcheap", function() {
  body = document.getElementsByTagName("body")[0];
  image = document.createElement("img");

  steepandcheapData = new DEALS.Data("steepandcheap", this.responseText);
  
  image.setAttribute("src", steepandcheapData.imageUrl());
  
  body.appendChild(image);
});
