const sidebar = document.querySelector('.sidebar');

const menu_btn = document.getElementById('menu_btn')

const closeBtn = document.querySelector('.close')

menu_btn.addEventListener('click', () => {
  sidebar.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active')
})

document.addEventListener('click', (e) => {
  const target = e.target;

  if(target !== menu_btn && !sidebar.contains(target)) {
    sidebar.classList.remove('active')
  }
})