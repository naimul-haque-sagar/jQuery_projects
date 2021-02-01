export function getAllData(){
    let output="";
    $.ajax({
        url:"get-all-input-data",
        data:{
            format:'json'
        },
        error: function(){
            console.log("error");
        },
        dataType:'json',
        success: function(result){
            let x="";
            if(result){
                x=result;
            }else {
                x="";
            }
            for(let i=0;i<x.length;i++){
                output+=
                "<tr><td>"+x[i].id+
                "</td><td>"+
                x[i].firstName+
                "</td><td>"+
                x[i].lastName+
                "</td><td>"+
                x[i].email+
                "</td><td>"+
                x[i].address+
                "</td><td><button class='button-edit' edit-id="+x[i].id +">Edit</button><button class='button-del' del-id="+x[i].id +">Delete</button></td></tr>";
            }
            $("#tbody").html(output);
        },
        type:'GET'
    });
}

export function getValueForEdit(id){
    $.ajax({
        url:"/get-by-id/"+id,
        data:{
            format:'json'
        },
        error: function (){
            console.log("error");
        },
        dataType:'json',
        success:function(result){
            $("#index-id").val(result.id);
            $("#first-name1").val(result.firstName);
            $("#last-name1").val(result.lastName);
            $("#email1").val(result.email);
            $("#address1").val(result.address);
        },
        type:'GET'
    });
}