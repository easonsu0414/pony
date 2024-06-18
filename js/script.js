

$(function(){
$('.btn5').click(function(event){
  event.preventDefault();
  $('.mySwipercar').css('display', 'block');
  $('.mySwipercar1').css('display', 'none');
  $('.mySwipercar2').css('display', 'none');
  $('.mySwipercar3').css('display', 'none');
  });

$('.btn7').click(function(event){
  event.preventDefault();
  $('.mySwipercar').css('display', 'none');
  $('.mySwipercar1').css('display', 'block');
  $('.mySwipercar2').css('display', 'none');
  $('.mySwipercar3').css('display', 'none');
  });

$('.btn8').click(function(event){
  event.preventDefault();
  $('.mySwipercar').css('display', 'none');
  $('.mySwipercar1').css('display', 'none');
  $('.mySwipercar2').css('display', 'block');
  $('.mySwipercar3').css('display', 'none');
   });

$('.btn9').click(function(event){
  event.preventDefault();
  $('.mySwipercar').css('display', 'none');
  $('.mySwipercar1').css('display', 'none');
  $('.mySwipercar2').css('display', 'none');
  $('.mySwipercar3').css('display', 'block');
   });
        
})


$(function(){
  $('.btn5-1').click(function(event){
    event.preventDefault();
    $('.mySwipercar4').css('display', 'block');
    $('.mySwipercar5').css('display', 'none');
    $('.mySwipercar6').css('display', 'none');
    $('.mySwipercar7').css('display', 'none');
    });
  
  $('.btn7-1').click(function(event){
    event.preventDefault();
    $('.mySwipercar4').css('display', 'none');
    $('.mySwipercar5').css('display', 'block');
    $('.mySwipercar6').css('display', 'none');
    $('.mySwipercar7').css('display', 'none');
    });
  
  $('.btn8-1').click(function(event){
    event.preventDefault();
    $('.mySwipercar4').css('display', 'none');
    $('.mySwipercar5').css('display', 'none');
    $('.mySwipercar6').css('display', 'block');
    $('.mySwipercar7').css('display', 'none');
     });
  
  $('.btn9-1').click(function(event){
    event.preventDefault();
    $('.mySwipercar4').css('display', 'none');
    $('.mySwipercar5').css('display', 'none');
    $('.mySwipercar6').css('display', 'none');
    $('.mySwipercar7').css('display', 'block');
     });
          
  })


  $(document).ready(function() {
    $('.carbutton').click(function() {
        // 移除所有按钮的 'active' 类
        $('.carbutton').removeAttr('style');
        
        // 为被点击的按钮添加 'active' 类
        $(this).css({
          'background-color': '#FCD100',
      });
  });
});

$(document).ready(function() {
  $('.carbutton').click(function() {
      // 移除所有按钮的 'active' 类
      $('.carbutton').removeAttr('style');
      
      // 为被点击的按钮添加 'active' 类
      $(this).css({
        'background-color': '#FCD100',
    });
});
});

$(document).ready(function() {
  $('.point').click(function() {
      window.location.href = 'https://www.google.com/search?q=gpt&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxBFGDsYwgPSAQk2NTAyMWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8'; // 将链接替换为目标页面的 URL
  });
  
});


$(document).ready(function() {
  $('.fb').click(function() {
      window.location.href = 'https://www.google.com/search?q=gpt&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxBFGDsYwgPSAQk2NTAyMWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8'; // 将链接替换为目标页面的 URL
  });
});

$(document).ready(function() {
  $('.line').click(function() {
      window.location.href = 'https://www.google.com/search?q=gpt&oq=&gs_lcrp=EgZjaHJvbWUqCQgBECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxBFGDsYwgPSAQk2NTAyMWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8'; // 将链接替换为目标页面的 URL
  });
});



$(function(){
  $('.burger').click(function(){
    $('.bgmenu').toggle();
  });
  
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.burger').length && !$(event.target).closest('.bgmenu').length) {
      $('.bgmenu').hide();
    }
  }); 

  })