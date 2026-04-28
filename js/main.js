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

/* ===== FAQ ACCORDION (v2.5) ===== */
document.querySelectorAll('.faq__question').forEach(function(btn){
  btn.addEventListener('click',function(){
    var item=this.closest('.faq__item');
    var wasOpen=item.classList.contains('active');
    item.closest('.faq__list').querySelectorAll('.faq__item').forEach(function(fi){fi.classList.remove('active')});
    if(!wasOpen)item.classList.add('active');
  });
});
/* legacy v1 FAQ (keep for inner pages not yet migrated) */
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){
    var item=this.parentElement;
    var wasOpen=item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach(function(fi){fi.classList.remove('open')});
    if(!wasOpen)item.classList.add('open');
  });
});

/* ===== REVEAL ON SCROLL ===== */
(function(){
  if(!('IntersectionObserver' in window))return;
  document.documentElement.classList.add('js');
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
})();

/* ===== NAV SCROLL BEHAVIOUR ===== */
(function(){
  var nav=document.getElementById('mainNav');
  if(!nav)return;
  function onScroll(){
    if(window.scrollY>60){nav.classList.add('scrolled');}
    else{nav.classList.remove('scrolled');}
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();
