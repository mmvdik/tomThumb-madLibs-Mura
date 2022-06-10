$('document').ready(function(){
    $('#madCalc').on('click', function(){
        var charac1 = $('#char1').val()
        var charac2 = $('#char2').val()   
        var adver = $('#adverb').val()
        var ver = $('#verb').val()
        var story = '<div class = "madLibsinner">'+ charac1+' with '+charac2+ ' '+ver+ ' in the bar '+ ' and '+adver+ ' died.'+'</div>'

       console.log(story)
        $('.output').replaceWith('<div class="output"'+story+'</div>')
    })

    $('#tomCalc').on('click', function(){
        var width = $('#tomWidth').val()
        var height = $('#tomHeight').val()   
        var num = $('#tomNum').val()
        var calculaceon = '<div class = "tomThumbinner">'+((width*height*num)/8)+'</div>'
       
       console.log(calculaceon)
        $('.outputin').replaceWith('<div class="output"'+calculaceon+'</div>')
    })


    $('#tom-tab').on('click', function (){
        $('#tomThumbinner')[0].classList.add("tab-pane", "show", "active")
        $('#madLibsinner')[0].classList.remove(...$('#madLibsinner')[0].classList);
        // 1) delete active
        // 2) add fade
        $('#madLibsinner')[0].classList.add("fade")

    })
        
    $('#mad-tab').on('click', function (){
        $('#madLibsinner')[0].classList.add("tab-pane", "show", "active")
        $('#tomThumbinner')[0].classList.remove(...$('#tomThumbinner')[0].classList);
        $('#tomThumbinner')[0].classList.add("fade") 
        
    })

});

