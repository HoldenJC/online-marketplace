$(document).ready(function() {
  $("#purchase").submit(function(event) {
    var item = $("input:radio[name=itemSelect]:checked").val();
    var userName = $("input#userName").val();
    var userAddress = $("input#userAddress").val();
    $(".itemName").append(item);
    $(".userName").append(userName);
    $(".userAddress").append(userAddress);

    $("#receipt").show();
  event.preventDefault();
  });
});
