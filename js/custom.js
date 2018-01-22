$('#previewModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$("#navtoggle").click(function(){
    $("i").toggleClass("fa-bars fa-close");
});
