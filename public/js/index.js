$(document).ready(function(){
    //scroll to a tags in navs
    $('nav').find("a").click(function(event){
        event.preventDefault();
        var $href = $(this).attr("href");
        var $anchor = $(".")+$($href).offset();
        window.scrollTop($anchor.left, $anchor.top);
        return false;
  });

  //Scroll to a tags in sections
  $('section').find("a").click(function(event){
    event.preventDefault();
    var $href = $(this).attr("href");
    var $anchor = $(".")+$($href).offset();
    window.scrollTop($anchor.left, $anchor.top);
    return false;
});




})