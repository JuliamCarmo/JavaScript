const links = document.querySelectorAll('nav a');

function ativarlink(link){
  const href = link.href;
  const url = document.location.href;

  if (href === url){
    link.style.backgroundColor = "green";
    link.style.color = "white";
  }
} 

links.forEach(ativarlink);