$(document).ready(function(){
    
const baseURL = 'https://json-db-data.herokuapp.com';

    //function add item to event list
    function addItemToEvent(item){
        $('#EventList').append(item);
       
    }



    //add event from button
    $('#addEvent').click(function(){
        var Month = $('#monthId option:selected').text();
        var Day = $('#dayId option:selected').text();
        var Year = $('#yearId option:selected').text();
        var Hour = $('#hourId option:selected').text();
        var Minute = $('#minuteId option:selected').text();
        var Second = $('#secondId option:selected').text();

        
        const postData = {
            day: Day,
            month: Month,
            year: Year,
            hour: Hour,
            minute: Minute,
            second: Second
        };
        
        
        //add data to server
        $.post(baseURL+ '/Event', postData ,function(data,staus){
            if(status === 'success'){
                addItemToEvent(data.id,data);
                
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
                
                addItemToEvent('<li class="list-group-item">Date:&nbsp'+data.day+'&nbsp'+data.month+'&nbsp'+data.year+'&nbspHour:'+data.hour+'&nbsp:'+data.minute+'&nbsp:'+data.second+'<button type="button" class="btn btn-link">Edit</button> <button id="btDelete" type="button" class="btn btn-link">Delete</button></li>');
            })
        }else{
            console.log('Could not load data from server');
        }
        
    });


    //delete event
    $('#btDelete').click(function(){
        
        console.log('Hello');
    });
   
});


