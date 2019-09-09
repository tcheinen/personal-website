
var pckry = new Packery( '.grid', {
  // options
  itemSelector: '.grid-item',
  gutter: 10
});

Packery.prototype.refresh = function() {
    this.reloadItems();
    this.layout();
}

$('#interests-menu').click(function() {
    $('.interests').prependTo($('.grid'));
    pckry.refresh()
});
$('#experience-menu').click(function() {
    $('.experience').prependTo($('.grid'));
    pckry.refresh()
});
$('#skills-menu').click(function() {
    $('.skills').prependTo($('.grid'));
    pckry.refresh()
});
$('#service-menu').click(function() {
    $('.service').prependTo($('.grid'));
    pckry.refresh()
});