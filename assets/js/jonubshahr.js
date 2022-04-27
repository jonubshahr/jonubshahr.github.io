$(document).ready(function(){
$('.persianDate').each(function () {
  var postDate = new Date(parseInt($(this).attr('data-timestamp'))*1000);
  var persianDate = postDate.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  $(this).text(persianDate);
})
})
$.ajax({
  url:"/posts.json",
  dataType: 'json',
  async: false,
  success: function(data) {
    posts = data;
  }
});
