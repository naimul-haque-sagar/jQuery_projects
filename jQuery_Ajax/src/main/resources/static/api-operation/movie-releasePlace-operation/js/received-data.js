$("#search-bar").on('submit',function(event){
    let input=$("#search-keyword").val();
    getReleasePlace(input);
    event.preventDefault();
});

//call to target api
function getReleasePlace(input){
    $.ajax({
        url:"http://localhost:8089/api/releasePlace/getReleasePlaceByName/"+input,
        data: {
            format:'json'
        },
        error: function(){
            console.log("error");
        },
        dataType:'json',
        success: function(result){
            $.each(result,(index,value)=>{
                $("#get-details").append(
                    `
                        <ul>
                            <li>${value.city}</li>
                            <li>${value.country}</li>
                        </ul>
                    `
                );
            });
        },
        type: 'GET'
    });
}


export function getValueForEdit(id){
    $.ajax({
        url:"http://localhost:8089/api/releasePlace/get-by-id/"+id,
        data:{
            format:'json'
        },
        error: function (){
            console.log("error");
        },
        dataType:'json',
        success:function(result){
            $("#movie-name").val(result.id);
            $("#city").val(result.firstName);
            $("#country").val(result.lastName);
            },
        type:'GET'
    });
}