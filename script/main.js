window.addEventListener('scroll', function() {
  if (window.scrollY > 150)
  {
    this.document.querySelector('#navbar').style.opacity = 0.5;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

