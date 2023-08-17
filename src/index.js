import * as home from "./home.js"
import * as menu from "./menu.js"
import * as contact from  "./contact.js"

import './styles.css'

function content(){
  return document.getElementById('content')
}

// content.appendChild()
// content.appendChild()
// content.appendChild()

// content.appendChild(menu.menu())

function activate_home_button(){
  const home_button = document.getElementsByClassName('home')[0];
  home_button.addEventListener('click', (e) => {
    content().replaceChildren(home.snap_box(), home.open_hours())
  })
}

function activate_menu_button(){
  const menu_button = document.getElementsByClassName('menu')[0];
  menu_button.addEventListener('click', (e) => {
    content().replaceChildren(menu.menu())
  })
}

function activate_contact_button(){
  const contact_button = document.getElementsByClassName('contact')[0];
  contact_button.addEventListener('click', (e) => {
    content().replaceChildren(contact.build_text_info('email', 'chachachoudhary@sabu.com'), contact.build_text_info('Phone', '903-112-9034, 834-342-1493'), contact.founders())
  })
}

function default_view(){
  content().appendChild(home.snap_box())
  content().appendChild(home.open_hours())
}

activate_home_button()
activate_menu_button()
activate_contact_button()
default_view()