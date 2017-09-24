$(document).ready(function() {
    
    $(".middle h2").click(function() {
        $(".middle ul").show();
        $(".middle h2 span").text("");
    })

    $(".middle-left h2").click(function() {
        $(".middle-left p").show();
        $(".middle-left h2 span").text("");
    })

    $(".middle-right h2").click(function() {
        $(".middle-right ul").show();
        $(".middle-right h2 span").text("");
    }) 
})
