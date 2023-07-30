$(document).ready(function(){
    $('.interesting__slider').slick({
        slidesToShow: 3,
        dots: true,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
               
            }
        ]
    });

   
  });

  $('.it-voyage__slider').slick({
    slidesToShow: 4,
    dots: true,
    responsive:[
        {
            breakpoint: 1310,
            settings: {
              slidesToShow: 3,
            }
          },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
           
        },
        
    ]
});