document.addEventListener('astro:page-load', () => {
  document.querySelector('#Font').addEventListener('click', Font)
})

function Font(){
  const body = document.querySelector('body')
  if(localStorage.getItem('Font') === 'sans-serif' || !localStorage.getItem('Font')){
    localStorage.setItem('Font', 'serif');
    body.style.fontFamily = '\'Libre Bodoni\', serif';
  }
  else {
    localStorage.setItem('Font', 'sans-serif');
    body.style.fontFamily = 'var(--font-body)';
  }
  }