const open = document.querySelector('.open')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')

const closeSidebarButton = document.querySelector('.closeSidebarButton')

open.addEventListener('click', () => {
    sidebar.classList.add('is-open')
})

closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('is-open')
}
)