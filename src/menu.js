import { build_text_container } from "./home"

const menu = function(){

  const box = document.createElement('div');

  const text_div = build_text_container('Regulars')
  text_div.classList.add('subheader')
  box.appendChild(text_div)

  const table = document.createElement("table")
  const table_header_data = ["Category", "Dish", "Price"]
  
  const header_row = table.insertRow()

  table_header_data.forEach((header)=>{
    const heading = document.createElement('th')
    heading.innerHTML = header
    header_row.appendChild(heading)
  })

  const menuItems =
  [
    { "category": "Appetizers", "dish": "Samosa", "price": "₹300" },
    { "category": "", "dish": "Paneer Tikka", "price": "₹450" },
    { "category": "", "dish": "Aloo Tikki", "price": "₹350" },
    { "category": "", "dish": "Papdi Chaat", "price": "₹550" },
    { "category": "", "dish": "Pakora", "price": "₹280" },
    { "category": "", "dish": "Chilli Paneer", "price": "₹420" },
    { "category": "", "dish": "Dahi Puri", "price": "₹470" },
    { "category": "", "dish": "Vegetable Spring Rolls", "price": "₹380" },
    { "category": "Main Courses", "dish": "Chicken Curry", "price": "₹900" },
    { "category": "", "dish": "Vegetable Biryani", "price": "₹750" },
    { "category": "", "dish": "Paneer Butter Masala", "price": "₹800" },
    { "category": "", "dish": "Lamb Rogan Josh", "price": "₹1200" },
    { "category": "", "dish": "Fish Curry", "price": "₹950" },
    { "category": "", "dish": "Jeera Rice", "price": "₹300" },
    { "category": "", "dish": "Palak Paneer", "price": "₹780" },
    { "category": "", "dish": "Beef Korma", "price": "₹1150" },
    { "category": "Breads", "dish": "Naan", "price": "₹125" },
    { "category": "", "dish": "Roti", "price": "₹100" },
    { "category": "", "dish": "Paratha", "price": "₹175" },
    { "category": "", "dish": "Garlic Naan", "price": "₹150" },
    { "category": "", "dish": "Missi Roti", "price": "₹120" },
    { "category": "", "dish": "Aloo Paratha", "price": "₹190" },
    { "category": "Desserts", "dish": "Gulab Jamun", "price": "₹200" },
    { "category": "", "dish": "Rasmalai", "price": "₹250" },
    { "category": "", "dish": "Kheer", "price": "₹150" },
    { "category": "", "dish": "Rasgulla", "price": "₹180" },
    { "category": "", "dish": "Carrot Halwa", "price": "₹220" },
    { "category": "", "dish": "Panna Cotta", "price": "₹280" }
]


  menuItems.forEach((item)=>{
    const row = table.insertRow()

    const category = row.insertCell(0)
    const dish = row.insertCell(1)
    const price = row.insertCell(2)

    category.innerHTML = item.category
    dish.innerHTML = item.dish
    price.innerHTML = item.price
  })

  box.appendChild(table)

  return box

}

export{ menu }