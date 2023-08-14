const snap = function(){
  const snap_box = get_div_container()
  const text_div = build_text_container('Snap')
  var image_element = document.createElement("img")
  image_element.setAttribute("src", "https://en.wikipedia.org/wiki/Restaurant#/media/File:Restaurant_N%C3%A4sinneula.jpg");
  snap_box.classList.add('snap_box')
  snap_box.appendChild(text_div).appendChild(image_element)

  return snap_box
}

const build_text_container = function(text){
  const newContent = document.createTextNode(text);
  var div = document.createElement("div")
  div.append(newContent);

  return div
}

const get_div_container = function(){
  var div = document.createElement("div");

  return div
}