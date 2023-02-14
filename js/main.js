
$(function(){

    // 1. a클릭시 위로 튕기는 이벤트제거
    $(document).on('click', 'a[href="#none"]',function(e){
      e.preventDefault();
    });
 
    // 2. Modal 창 보이기,닫기
    $('.open-modal').click(function () {
      $('.modal').fadeIn()
    });

    $('.close-modal').click(function () {
      $('.modal').fadeOut()
    });

    // 3. Header 스크롤 체인지 효과
    $(window).scroll(function(){
      if($(window).scrollTop() > 50) {
        $('header').addClass('active')
      }
      else {
        $('header').removeClass('active')
      }    
    });

    // 4. 모바일 GNB 트리거
    $('.trigger').click(function(){
      $(this).toggleClass('active')
      $('.gnb').toggleClass('active')
    });
    $('.gnb a').click(function(){
      $('.gnb, .trigger').removeClass('active')
    });

});

