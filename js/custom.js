$("#navtoggle").click(function(){
    $("i").toggleClass("fa-bars fa-close");
});

$('#responseauthors').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$(window).on('load',function(){
        $('#myModal').modal('show');
    });
