const menu = function(){

  const box = get_div_container()
  box.classList.add('menu')
  const text_div = build_text_container('Menu')
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
    { category: "Appetizers", dish: "Samosa", price: "₹300" },
    { category: "", dish: "Paneer Tikka", price: "₹450" },
    { category: "", dish: "Aloo Tikki", price: "₹350" },
    { category: "", dish: "Papdi Chaat", price: "₹550" },
    { category: "Main Courses", dish: "Chicken Curry", price: "₹900" },
    { category: "", dish: "Vegetable Biryani", price: "₹750" },
    { category: "", dish: "Paneer Butter Masala", price: "₹800" },
    { category: "", dish: "Lamb Rogan Josh", price: "₹1200" },
    { category: "Breads", dish: "Naan", price: "₹125" },
    { category: "", dish: "Roti", price: "₹100" },
    { category: "", dish: "Paratha", price: "₹175" },
    { category: "Desserts", dish: "Gulab Jamun", price: "₹200" },
    { category: "", dish: "Rasmalai", price: "₹250" },
    { category: "", dish: "Kheer", price: "₹150" }
];

  menuItems.forEach((item)=>{
    const row = table.insertRow()

    const category = row.insertCell(0)
    const dish = row.insertCell(1)
    const price = row.insertCell(2)

    category.innerHTML = item[category]
    dish.innerHTML = item[dish]
    price.innerHTML = item[price]
  })

}

export{ menu }