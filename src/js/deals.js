var steepandcheapData,
    body,
    image 

steepandcheapData = new DEALS.data("steepandcheap")

body = document.getElementsByTagName("body")[0]
image = document.createElement("img")

image.setAttribute("src", steepandcheapData.imageUrl())

body.appendChild(image)

