// dropbar.js 

var dropbar = document.getElementsByClassName('dropbar')[0];
var dropbarHeight = dropbar.offsetHeight;
var dropbarIsOpen = false;

dropbar.style.height = 0;

function toggleDropbar() {
  if (dropbarIsOpen == false) dropbar.style.height = dropbarHeight + 'px';
  else dropbar.style.height = 0;
  dropbarIsOpen = !dropbarIsOpen;
};

// Handle changes in height due to reflowing on window resizing
window.onresize = function(event) {
  dropbar.style.transition = 'none';
  dropbar.style.height = 'auto';
  // dropbar.style.transition = '';
  dropbarHeight = dropbar.offsetHeight;
  console.log(dropbarHeight);
  if (dropbarIsOpen == false) dropbar.style.height = 0;
  dropbar.style.transition = '';
};
