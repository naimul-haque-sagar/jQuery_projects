function watch(){
    window.location='/api-operation/watchList.html';
}

$("#task-1").on("click","li",function(event){
    $(this).toggleClass("done")
    event.stopPropagation();
});

$("#task-1").on("click","ul",function(event){
    $(this).fadeOut(200,function(){
        console.log($(this).remove());
    })
    event.stopPropagation();
});

$("#button-3").on("click",function(){
    axios.get('http://localhost:8080/movie-watchList/get-watchList')
    .then(response=>{
        printToDiv(response);
    })
    .catch(err=>{
        console.log(err);
    });
});

function printToDiv(response){
    let data=response.data;
    let output='';
    data.forEach(function(item){
        console.log(item.title);
        output+=`
            <ul>
                <li><span>~</span>${item.title}</li>
            </ul>
        `;
    });
    $("#task-1").html(output);
}

$("stp").keypress(function(event){
    if(event.which===13){
        var task=$("input").val();
        $("ul").append("<li><span> ~ </span>"+task+"</li>");
        $("input").val("");
    }
});

$("stp").click(function(){
    if($(this).css("color") == "rgb(0, 128, 0)"){
        $(this).css({
                color:"black",
                textDecoration:"none"
        });
    }else{
        $(this).css({
            color:"green",
            textDecoration:"line-through"
        });
    }
});