$(".RSVP").click(function(){
    var rsvp = $(".input1").val();
    if (rsvp === "Yes" || rsvp ==="yes"){
        $("img").attr("src","https://thumbs.gfycat.com/GenerousMerryCurassow-small.gif");
    }else if (rsvp === "Maybe" || rsvp ==="maybe") {
        $("img").attr("src","https://media2.giphy.com/media/g9OLSjrWHJQRi/giphy.gif");
    }else if (rsvp ==="No" || rsvp ==="no"){
        $("img").attr("src","https://media.tenor.com/images/8266b4b383c78c75866fca0b2fef0890/tenor.gif");
    }
});

$(".addcomment").click(function(){
    var comment = $(".comment").val();
    $(".comments").append(comment + "<br><br>");
});


