const snap_box = function(){
  const snap_box = get_div_container()
  const text_div = build_text_container('Snaps')
  text_div.classList.add('subheader')
  var image_element1 = new Image(400, 400)
  image_element1.src = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Ravintola_Kuappi_-_Veikonkatu_1_-_Iisalmi_-_2.jpg";

  var image_element2 = new Image(400, 400)
  image_element2.src = "https://upload.wikimedia.org/wikipedia/commons/d/da/Restaurant_Kuappi_-_inside_-_Veikonkatu_1_-_Iisalmi.jpg";

  const image_div = get_div_container()
  image_div.classList.add('snaps')
  image_div.appendChild(image_element1)
  image_div.appendChild(image_element2)
  snap_box.classList.add('snap_box')
  snap_box.appendChild(text_div)
  snap_box.appendChild(image_div)

  return snap_box
}

const open_hours = function(){

  const box = get_div_container()
  box.classList.add('open-hours')
  const text_div = build_text_container('Open Hours')
  text_div.classList.add('subheader')
  box.appendChild(text_div);
  const table = document.createElement("table")
  const table_header_data = ["Day", "Opening", "Closing"]
  
  const header_row = table.insertRow()

  table_header_data.forEach((header)=>{
    const heading = document.createElement('th')
    heading.innerHTML = header
    header_row.appendChild(heading)
  })

  const timings = [
    { day: "Monday", opening: "10:00", closing: "22:00" },
    { day: "Tuesday", opening: "10:00", closing: "22:00" },
    { day: "Wednesday", opening: "11:00", closing: "23:00" },
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

    day.innerHTML = timing.day
    opening.innerHTML = timing.opening
    closing.innerHTML = timing.closing
  })

  box.appendChild(table);

  return box
}

const build_text_container = function(text){
  const newContent = document.createTextNode(text);
  const div = get_div_container()
  div.appendChild(newContent);

  return div
}

const get_div_container = function(){
  var div = document.createElement("div");

  return div
}

// const home = snap()
// home.insertAdjacentElement('afterend', open_hours()).insertAdjacentElement('afterend', founders())

export { snap_box, open_hours, build_text_container }
