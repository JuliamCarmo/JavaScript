const links = document.querySelectorAll("nav a")

function logHref(item) {
  const href = item.href
  console.log(href)
}

links.forEach(logHref)  
console.log(links[links.length -1])