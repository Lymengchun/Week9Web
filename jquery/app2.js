$(document).ready(function(){
    
const baseURL = 'https://json-db-data.herokuapp.com';

    //function add item to event list
    function addItemToEvent(item){
        $('#EventList').append(item);
       
    }

  

    //add event from button
    $('#addEvent').click(function(){
        var Title = $('#EventNameId').val();
        

        
        const postData = {
            titleTask: Title
        };
        
        //hello test
        //add data to server
        $.post(baseURL+ '/Event', postData ,function(data,status){
            
            if(status === 'success'){
                addItemToEvent('<li  id='+data.id+'  class="list-group-item " >'+data.titleTask+'<button type="button" class="btn btn-link ">Edit</button> <button type="button" class="btn btn-link delete">Delete</button></li>');    
                $(".delete").click(function(){

                    $.ajax({
                        url: baseURL+"/Event/"+ $(this).parent().attr("id"),
                        type: 'DELETE',
                        success: function(result) {
                           
                        }
                    })
                   
                    $(this).parent().remove();
                
                   });
            }else{
                console.log('Could not load data from server');
            }
        });

        

    });
    //Mark as done
    // $('#EventList').on('click','.mark-ask-done',function(){

    //     $(this).parents('li').addClass('cross-text');
    // })

    // Load Event from server
    $.get(baseURL+ '/Event', function(data,status){
        if(status === 'success'){
            $.each(data, function(key,data){
                
                addItemToEvent('<li  id='+data.id+'  class="list-group-item " >'+data.titleTask+'<button type="button" class="btn btn-link ">Edit</button> <button type="button" class="btn btn-link delete">Delete</button></li>');    
                
            }
            )
            $(".delete").click(function(){

                $.ajax({
                    url: baseURL+"/Event/"+ $(this).parent().attr("id"),
                    type: 'DELETE',
                    success: function(result) {
                       
                    }
                })
               
                $(this).parent().remove();
            
               });
        }else{
            console.log('Could not load data from server');
        }
        
    });

    
    
   


   
   
});


