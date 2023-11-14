document.addEventListener('astro:page-load', () => {
  document.querySelector('[Font]').addEventListener('click', Font)
})

function Font(){
  const body = document.querySelector('body')
  if(localStorage.getItem('Font') === 'serif' || !localStorage.getItem('Font')){
    localStorage.setItem('Font', 'sans-serif');
    body.style.fontFamily = 'var(--font-body)';
  }
  else {
    localStorage.setItem('Font', 'serif');
    body.style.fontFamily = '\'Libre Bodoni\', serif';
  }
  }