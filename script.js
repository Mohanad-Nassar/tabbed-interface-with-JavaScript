var tabs = document.querySelectorAll('#tabs > ul > li > a');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', selectTab)

}

function selectTab(event) {
    event.preventDefault();

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].removeAttribute('class');
    }

    event.target.className = 'active';

    var thisTab = event.target.getAttribute('href');
    var thisContent = document.querySelector(thisTab);

    var oldContent = document.querySelector('.visible');
    oldContent.className = "visuallyHidden";
    oldContent.addEventListener('transitionend', function () {
        oldContent.className = "hidden";

        thisContent.className ="visible visuallyHidden"; 

        setTimeout(function(){
            thisContent.classList.remove('visuallyHidden');
        }, 20);

    },{capture:false, once:true, passive:false});


}
