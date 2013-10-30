// dropbar.js
//
// Element height getter/setter for using CSS transition-property: height

// Need to scope this to specific elements

var db = document.getElementsByClassName('dropbar')[0];

var height = db.offsetHeight;
var isOpen = false;
db.style.height = 0;

  

  window.onresize = function(e) {
    db.style.transition = 'none';
    db.style.height = 'auto';
    height = db.offsetHeight;
    if (isOpen == true) db.style.height = height + 'px';
    if (isOpen == false) db.style.height = 0;
  };

function toggleDropbar() {
  db.style.transition = '';
  if (isOpen == false) db.style.height = height + 'px';
  else db.style.height = 0;
  isOpen = !isOpen;
};
