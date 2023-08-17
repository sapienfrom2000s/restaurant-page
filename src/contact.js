import { build_text_container } from './home.js'

const build_text_info = function(heading, text){
  var div = get_div_container()

  const heading_div = get_div_container()
  heading_div.classList.add('subheader')
  heading_div.innerHTML = heading

  const newContent = get_div_container()
  newContent.innerHTML = text

  div.appendChild(heading_div)
  div.appendChild(newContent)

  return div
}

const get_div_container = function(){
  var div = document.createElement("div");

  return div
}

const founders = function(){
  const founders_box = get_div_container()
  const text_div = build_text_container('Founder')
  text_div.classList.add('subheader')
  const image_element1 = new Image(400, 420)
  image_element1.src = "https://upload.wikimedia.org/wikipedia/en/e/ee/Chacha_Chaudhary_with_his_dog_Raaket.jpg"
  founders_box.classList.add('founders_box')
  const image_div = get_div_container()
  image_div.classList.add('founders')

  image_div.appendChild(image_element1)

  founders_box.appendChild(text_div)
  founders_box.appendChild(image_div)

  return founders_box
}

// const email = build_text_info('email', 'chachachoudhary@sabu.com')
// const phone = build_text_info('Phone', '903-112-9034, 834-342-1493')

export { build_text_info, founders }