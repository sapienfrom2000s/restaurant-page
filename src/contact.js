
const build_text_info = function(heading, text){
  const heading = document.createElement('h3')
  const newContent = document.createTextNode(text)
  heading.innerHTML = heading
  var div = document.createElement("div")
  div.append(newContent)

  return div
}

const email = build_text_info('email', 'chachachoudhary@sabu.com')
const phone = build_text_info('Phone', '903-112-9034, 834-342-1493')

export { phone, email }