
    $(document).ready(function(){
       $(".profile-photo").mouseenter(function(){
          $(this).fadeTo('slow',1);

      });

      $(".profile-photo").mouseleave(function(){
          $(this).fadeTo('slow',0.4);

      });

      $("#gallery li").mouseenter(function(){
          $(this).fadeTo("slow",1);


      });

      $("#gallery li").mouseleave(function(){
          $(this).fadeTo("slow",0.4);


      });

      $('form').hide();

      $('.emailform').click(function(){
        $('form').slideToggle();

      });


    });