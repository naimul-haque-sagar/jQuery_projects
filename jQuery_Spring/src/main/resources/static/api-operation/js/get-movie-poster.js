function move(){
    window.location='/api-operation/movie-poster-gallery.html';
}

function getPoster(){
    axios.get('http://localhost:8080/save-info/getInfo')
    .then(response=>{
        galleryDivData(response);
    })
    .catch(err=>{
        console.log(err);
    });
}

function galleryDivData(response){
    let data=response.data;
   let output='';
    $.each(data,(index,value)=>{
        axios.get('http://www.omdbapi.com/?i='+value.title+'&apikey=552972b6')
        .then(response=>{
            console.log(response);
            let x=response.data;
            console.log(x.Title);
            output+=x.Title;
        })
        .catch(err=>{
            console.log(err);
        });
    });

    console.log(output);
}
