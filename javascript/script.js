// Toggle between light and dark themes
// function toggleTheme() {
//  const html = document.documentElement
//  if (html.classList.contains("light")) {
//    html.classList.remove("light")
//  } else {
//    html.classList.add("light")
//  }
//}
// Refactored to use toggle method
function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/daniel_foto.jfif")
    img.setAttribute("title", "Foto do Daniel com fundo claro")
  } else {
    img.setAttribute("src", "./assets/foto_daniel.jpg")
    img.setAttribute("title", "Foto do Daniel com fundo escuro")
  }
}
