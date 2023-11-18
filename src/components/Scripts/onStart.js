document.addEventListener('astro:page-load', () => {
    localStorage.getItem('DarkLight') ? 
    document.body.classList.add(localStorage.getItem('DarkLight')) : 
    sessionStorage.setItem('DarkLight', 'light')
    localStorage.getItem('Font') === 'sans-serif' ?
    document.body.style.fontFamily = 'var(--font-body)' :
    localStorage.setItem('Font', 'serif')
})
document.addEventListener('astro:after-swap', () => {
    localStorage.getItem('DarkLight') ? 
    document.body.classList.add(localStorage.getItem("DarkLight")) : 
    localStorage.setItem('DarkLight', 'light')
    localStorage.getItem('Font') === 'sans-serif' ?
    document.body.style.fontFamily = 'var(--font-body)' :
    localStorage.setItem('Font', 'serif')
})