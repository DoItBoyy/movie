$(document).ready(function(){
    //form click
    $('#b-menu').hide();
    $('#menu').click(function(){
        $('#b-menu').show(); 
        $('.b-menu-box').addClass('b-menu-box1');
        
        $('#sign-in').show(function(){
            $('#sign-in').css({
                'background-color':'aquamarine',
                'border': '1px solid black',
            })
            $('#log-in').css({
                'background-color':'#A9A9A9',
                'border': 'none',
            })
            $('.b-f-2').hide();
            $('.b-f-1').show();
            
        })       
    })
    $('#close').click(function(){
        $('#b-menu').hide();        
        $('.b-menu-box').slideup(); 
    })

    $('#sign-in').click(function(){
        $('#sign-in').css({
            'background-color':'aquamarine',
            'border': '1px solid black',
        })
        $('#log-in').css({
            'background-color':'#A9A9A9',
            'border': 'none',
        })
        $('.b-f-2').hide();
        $('.b-f-1').show();
    })
    $('#log-in').click(function(){
        $('#log-in').css({
            'background-color':'aquamarine',
            'border': '1px solid black',
        })
        $('#sign-in').css({
            'background-color':'#A9A9A9',
            'border': 'none',
        })
        $('.b-f-1').hide();
        $('.b-f-2').show();
    })
    $('#signup').click(function(){
        var string = $('#ipt').val();
        if (string.length == " "){
            alert("Please sign up first!");
        }
        else{
            alert("You're sign up successfully!");
        }
    })
    $('#login').click(function(){
        var string = $('#ipt2').val();
        if (string.length == " "){
            alert("Please Log in first!");
        }
        else{
            alert("Successfully!");
        }
    })
    $(".fa-eye").click(function () {
        var type = $(".pass");
        if (type.attr('type') === 'password'){
            type.attr('type','text');
        }
        else{
            type.attr('type','password');
        }
        
    });

    // Swap
    $('.swap').show();
    $('.swap2').hide();
    $('.movie').click(function () {
        $('.movie').css({
            'background-color':"rgba(0, 255, 255, 0.708)",
            'color': 'white',
        })
        $('.tv-show').css({
            'background-color':"#696969",
            'color': 'rgba(255, 255, 255, 0.82)',
            
        })
        $('.swap').show();
        $('.swap2').hide();
        
    });
    $('.tv-show').click(function () {
        $('.swap').hide();
        $('.swap2').show();
        $('.movie').css({
            'background-color':"#696969",
            'color': 'rgba(255, 255, 255, 0.82)',
        })
        $('.tv-show').css({
            'background-color':"rgba(0, 255, 255, 0.708)",
            'color': 'white',
        })
    });

})



const p1 = document.querySelector('.name-form-sig');
const p2 = document.querySelector('.name-form-log');


function show1(){
        p1.innerHTML= 'Sign Up';
    }
    function show2(){
        p2.innerHTML= 'Log In';
    }


