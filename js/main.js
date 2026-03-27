/* ===== BEFORE / AFTER SLIDER ===== */
document.querySelectorAll('.ba-slider').forEach(function(slider){
  var handle=slider.querySelector('.ba-handle');
  var after=slider.querySelector('.ba-after');
  var dragging=false;

  function move(x){
    var rect=slider.getBoundingClientRect();
    var pos=Math.max(0,Math.min(1,(x-rect.left)/rect.width));
    handle.style.left=pos*100+'%';
    after.style.clipPath='inset(0 '+(100-pos*100)+'% 0 0)';
  }

  handle.addEventListener('mousedown',function(e){e.preventDefault();dragging=true});
  window.addEventListener('mousemove',function(e){if(dragging)move(e.clientX)});
  window.addEventListener('mouseup',function(){dragging=false});

  handle.addEventListener('touchstart',function(e){e.preventDefault();dragging=true},{passive:false});
  window.addEventListener('touchmove',function(e){if(dragging)move(e.touches[0].clientX)},{passive:true});
  window.addEventListener('touchend',function(){dragging=false});
});

/* ===== MOBILE NAV ===== */
(function(){
  var hamburger=document.querySelector('.hamburger');
  var mobileNav=document.querySelector('.mobile-nav');
  var closeBtn=document.querySelector('.mobile-nav-close');
  if(!hamburger)return;

  hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow=mobileNav.classList.contains('open')?'hidden':'';
  });
  if(closeBtn){
    closeBtn.addEventListener('click',function(){
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow='';
    });
  }
  mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow='';
    });
  });
})();

/* ===== FAQ ACCORDION ===== */
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){
    var item=this.parentElement;
    var wasOpen=item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach(function(fi){fi.classList.remove('open')});
    if(!wasOpen)item.classList.add('open');
  });
});

/* ===== HEADER SCROLL SHADOW ===== */
(function(){
  var header=document.querySelector('.site-header');
  if(!header)return;
  window.addEventListener('scroll',function(){
    if(window.scrollY>50){
      header.style.boxShadow='0 4px 20px rgba(0,0,0,.12)';
    }else{
      header.style.boxShadow='0 2px 12px rgba(0,0,0,.08)';
    }
  },{passive:true});
})();
