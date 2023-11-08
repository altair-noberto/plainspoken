document.addEventListener('astro:page-load', () => {
  document.querySelector('[DarkLight]').addEventListener('click', DarkLight)
  function DarkLight(){
    const body = document.querySelector('body')
    if(body.classList.contains('dark')) {
      body.classList.remove('dark');
      localStorage.setItem('DarkLight', 'light')
    }
    else {
      body.classList.add('dark');
      localStorage.setItem('DarkLight', 'dark')
    }
  }
})