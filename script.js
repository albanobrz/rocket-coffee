const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


openBtn.addEventListener('click', function(){
    sidebar.classList.add('sidebar-show')
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('sidebar-show')
})