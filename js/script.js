// toggle popup
$(function () {
  $('[data-toggle="popover"]').popover()
})


// pause video on close model
$('body').on('hidden.bs.modal', '.modal', function () {
  $('video').trigger('pause');
});