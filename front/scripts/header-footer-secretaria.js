document.addEventListener("DOMContentLoaded", () => {
  fetch('/pages/header-footer-secretaria.html')
    .then(res => res.text())
    .then(data => {
      const temp = document.createElement('div');
      temp.innerHTML = data;
      const header = temp.querySelector('header');
      const footer = temp.querySelector('footer');
      document.body.prepend(header);
      document.body.appendChild(footer);
    });
});
