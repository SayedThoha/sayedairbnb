
$(document).ready(function(){
$("#bttn1").mouseenter(function(){
    $(this).css({"background":"red"})

})
$("#bttn1").mouseleave(function(){
    $(this).css({"background":"none"})
})
    $("#bttn2").mouseenter(function(){
        $(this).css({"background":"lightblue"})
    
    })
    $("#bttn2").mouseleave(function(){
        $(this).css({"background":"none"})

    })
$("#formbtn").click(function(){
    alert("Subscribed")

 })
})
