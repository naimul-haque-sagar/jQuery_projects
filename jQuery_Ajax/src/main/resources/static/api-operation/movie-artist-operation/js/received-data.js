$('#search-bar').on('submit',(e)=>{
    let text=$('#search-keyword').val();
    getArtistByName(text);
    e.preventDefault();
});

//call to target api
function getArtistByName(text){
    $.ajax({
        url:'http://localhost:8089/api/artists/getArtistsByName/'+text,
        data:{
            format:'json'
        },
        error: function(){
            console.log("error");
        },
        dataType: 'json',
        success: function(result){
            $("#get-details").append(
                `
                    <ul>
                        <li>${result.actor}</li>
                        <li>${result.director}</li>
                        <li>${result.actress}</li>
                    </ul>
                `
            );
        },
        type: 'GET'
    });
}

export function getValueForEdit(id){
    $.ajax({
        url:"http://localhost:8089/api/artists/get-by-id/"+id,
        data:{
            format:'json'
        },
        error: function (){
            console.log("error");
        },
        dataType:'json',
        success:function(result){
            $("#index-id").val(result.id);
            $("#movieName").val(result.movieName);
            $("#director").val(result.director);
            $("#actor").val(result.actor);
            $("#actress").val(result.actress);
        },
        type:'GET'
    });
}