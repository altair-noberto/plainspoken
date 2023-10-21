document.addEventListener('astro:page-load', () => {
  document.querySelector('[DarkLight]').addEventListener('click', DarkLight)
  function DarkLight(){
    const body = document.querySelector('body')
    if(body.classList.contains('dark')) {
      body.classList.remove('dark');
      sessionStorage.setItem('DarkLight', 'light')
    }
    else {
      body.classList.add('dark');
      sessionStorage.setItem('DarkLight', 'dark')
    }
  }
})