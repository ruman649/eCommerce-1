
// scroll var hehaviour 
let nav = document.querySelector('.navbar-wrap');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('scroll_on');
    }
    else{
        nav.classList.remove('scroll_on');
    }
}



// spy scroll hide 
let navbar = document.querySelectorAll('.nav-link');
let navColl = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(e){
    e.addEventListener('click', function(){
        navColl.classList.remove('show');
    })
})