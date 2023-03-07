$(document).ready(function(){
    $('#FadeIn').click(function(){
        $('#box').fadeIn(1000)                            // we can give "slow" , "fast" and milisecond in parameter
    })
    $('#FadeOut').click(function(){
        $('#box').fadeOut(1000)
    })
    $('#FadeToggle').click(function(){
        $('#box').fadeToggle("slow")                    
    })

    $('#FadeTo').click(function(){
        $('#box').fadeTo(2000 , 0.1 , function(){
            $('#ol').append("<li class='happen'>This is FadeTo</li>")
        })                    
    })

})