'use strict';

const cssButton = document.getElementById('button-css');
const jsButton = document.getElementById('button-js');
const cssText = document.getElementById('content-css');
const jsText = document.getElementById('content-js');

// Show CSS content, hide JS content
cssButton.addEventListener('click', function() {
    if (cssText.classList.contains('d-none')){
        cssText.classList.remove('d-none');
    }
    else {
        cssText.classList.add('d-none')
    }

    if (!jsText.classList.contains('d-none')){
        jsText.classList.add('d-none');
    }
});

// Show JS content, hide CSS content
jsButton.addEventListener('click', function() {
    if (jsText.classList.contains('d-none')){
        jsText.classList.remove('d-none');
    }
    else {
        jsText.classList.add('d-none')
    }

    if (!cssText.classList.contains('d-none')){
        cssText.classList.add('d-none');
    }
});

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } 
    else {
      panel.style.display = "block";
    }
  });
};