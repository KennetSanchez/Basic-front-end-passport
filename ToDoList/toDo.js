$("ul").on("click","li", function(){
    $(this).toggleClass("done");
})

$(".fa-plus").click(function(){
    $("#toDo").fadeToggle();
})

$("#toDo").keypress(function(event){
    if(event.which===13){
        let text = $(this).val();  
        if(text.length > 5){                    
            $(this).val("");
            $("ul").append('<li><i class = "far fa-trash-alt"></i>' +text+ '</li>');
    }else{
        alert("El mínimo de longitud es 5")
    }
    }
})
$("ul").on("click", "i", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});