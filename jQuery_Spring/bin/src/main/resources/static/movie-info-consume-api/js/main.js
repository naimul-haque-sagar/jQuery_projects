$(document).ready(()=>{
    $('#search-form').on('submit',(e)=>{
        let searchText=$('#search-text').val();
        console.log(searchText);
        e.preventDefault();
    });
});