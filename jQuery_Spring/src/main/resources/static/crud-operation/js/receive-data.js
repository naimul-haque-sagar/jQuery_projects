export function getAllFormData(){
    axios.get('get-all-data')
    .then(function(response){
        let divData="";
        let data=response.data;
        $.each(data,(index,value)=>{
            divData+="<tr><td>"+value.id+"</td><td>"+value.firstName+"</td><td>"+ value.lastName+"</td><td>"+value.email+"</td><td>"+value.address+
             "</td><td><button class='button-edit' edit-id="+value.id +">Edit</button><button class='button-del' del-id="+value.id +">Delete</button></td></tr>";
        });
        $("#tbody").html(divData);
    })
    .catch(function(err){
        console.log(err);
    })
    ;
}

$("#tbody").on("click",".button-edit",function(){
    let indexId=$(this).attr("edit-id");
    axios.get('get-by-id/'+indexId)
    .then(function(response){
        let out=response.data;
        $("#index-id").val(out.id);
        $("#first-name1").val(out.firstName);
        $("#last-name1").val(out.lastName);
        $("#email1").val(out.email);
        $("#address1").val(out.address);
    })
    .catch(function(err){
        console.log(err);
    })
    ;
});
