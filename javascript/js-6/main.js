// document.addEventListener('DOMContentLoaded', function() {
//   var collapseButton = document.querySelector('.collapse-button');
//   var collapseContent = document.querySelector('.collapse-content');

//   collapseButton.addEventListener('click', function() {
//       if (collapseContent.style.maxHeight) {
//           collapseContent.style.maxHeight = null;
//       } else {
//           collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';
//       }
//   });
// });
var collapseContent2 = document.querySelector('#collapse1');
console.log(collapseContent2.scrollHeight);

document.addEventListener('DOMContentLoaded', function () {
  var collapseButtons = document.querySelectorAll('.collapse-button');
  let f = false;
  let x;
  let y;
  collapseButtons.forEach((collapseButton) => {
    const a = collapseButton.getAttribute("aria-expanded");
    if (a === "true") {
      console.log(collapseButton.getAttribute("aria-expanded"));
      const t = collapseButton.getAttribute("data-target");
      const collapseContent = document.querySelector(t);
      collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';
      x = t;
      f = true;
      y = collapseButton;
    }
    collapseButton.addEventListener('click', function () {
      const t = collapseButton.getAttribute("data-target");
      console.log(t);

      if (f && x !== t) {
        var collapseContentx = document.querySelector(x);
        if (collapseContentx.style.maxHeight) {
          collapseContentx.style.maxHeight = null;
          y.ariaExpanded = false;
        }
        f = false;
      }
      var collapseContent = document.querySelector(t);
      if (collapseContent.style.maxHeight) {
        collapseContent.style.maxHeight = null;
        collapseButton.ariaExpanded = false;
      } else {
        collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';
        collapseButton.ariaExpanded = true;
        y = collapseButton;
        console.log(collapseButton.ariaExpanded);
        x = t;
        f = true;
      }
    });
  });
});