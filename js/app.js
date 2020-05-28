window.onload = function(){
    

  var navbar = document.getElementById("navbar__list")
  var elements = document.getElementsByTagName("section")
  

  for (let i=0; i < elements.length; i++) {
      var list = document.createElement("LI")
      var li_name = document.createTextNode(elements[i].dataset.nav)
      let id = elements[i].id
      list.appendChild(li_name)
      
      list.onclick = function(){
          jump(id);
      }
      navbar.appendChild(list)
      
  }
}()

function jump(id){
  document.getElementById(id).scrollIntoView({behavior: "smooth"})
}