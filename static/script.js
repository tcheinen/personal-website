
window.addEventListener('DOMContentLoaded', (event) => {
    var elem = document.querySelector('.grid');
    var pckry = new Packery( elem, {
      // options
      itemSelector: '.grid-item',
      gutter: 10
    });
});