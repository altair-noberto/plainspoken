document.addEventListener('astro:page-load', () => {
  document.querySelector('[Font]').addEventListener('click', Font)
})

function Font(){
  const body = document.querySelector('body')
  if(sessionStorage.getItem('Font') === 'serif' || !sessionStorage.getItem('Font')){
    sessionStorage.setItem('Font', 'sans-serif');
    body.style.fontFamily = 'var(--font-body)';
  }
  else {
    sessionStorage.setItem('Font', 'serif');
    body.style.fontFamily = 'initial';
  }
  }