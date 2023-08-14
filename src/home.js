const snap = function(){
  const snap_box = get_div_container()
  const text_div = build_text_container('Snap')
  var image_element = document.createElement("img")
  image_element.setAttribute("src", "https://en.wikipedia.org/wiki/Restaurant#/media/File:Restaurant_N%C3%A4sinneula.jpg");
  snap_box.classList.add('snap_box')
  snap_box.appendChild(text_div).appendChild(image_element)

  return snap_box
}

const open_hours = function(){

  const box = get_div_container()
  box.classList.add('open-hours')
  const text_div = build_text_container('Open Hours')
  const table = document.createElement("table")
  const table_header_data = ["Day", "Opening Time", "Closing Time"]
  
  const header_row = table.insertRow()

  table_header_data.forEach((header)=>{
    const heading = document.createElement('th')
    heading.innerHTML = header
    header_row.appendChild(heading)
  })

  const timings = [
    { day: "Monday", opening: "10:00", closing: "22:00" },
    { day: "Tuesday", opening: "10:00", closing: "22:00" },
    { day: "Wednesday", opening: "10:00", closing: "22:00" },
    { day: "Thursday", opening: "10:00", closing: "22:00" },
    { day: "Friday", opening: "10:00", closing: "23:00" },
    { day: "Saturday", opening: "11:00", closing: "23:00" },
    { day: "Sunday", opening: "11:00", closing: "22:00" }
  ];

  timings.forEach((timing)=>{
    const row = table.insertRow()

    const day = row.insertCell(0)
    const opening = row.insertCell(1)
    const closing = row.insertCell(2)

    day.innerHTML = timing[day]
    opening.innerHTML = timing[opening]
    closing.innerHTML = timing[closing]
  })
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

const founders = function(){
  const founders_box = get_div_container()
  const text_div = build_text_container('Founders')
  const image_element1 = document.createElement("img")
  image_element1.setAttribute("src", "https://en.wikipedia.org/wiki/Ron_Weasley#/media/File:Ron_Weasley_poster.jpg");
  const image_element2 = document.createElement("img")
  image_element1.setAttribute("src", "https://en.wikipedia.org/wiki/Harry_Potter_(character)#/media/File:Harry_Potter_character_poster.jpg");
  founders_box.classList.add('founders_box')
  founders_box.appendChild(text_div).appendChild(image_element1).appendChild(image_element2)

  return founders_box
}