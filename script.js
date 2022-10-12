const sup = document.querySelector(".signup-cont");
const sig = document.querySelector('.signin-cont');
const supBtn = document.querySelector('#signin-btn');
const sigBtn = document.querySelector('#signup-btn');

supBtn.addEventListener('click', function(){
    sup.style.transform = "rotateY(5deg)";
    sig.style.transform = "rotateY(80deg)";
    // if(sup.style.transform.match == '5deg'){

    // }
});

sigBtn.addEventListener('click', function(){
    sig.style.transform = "rotateY(5deg)";
    sup.style.transform = "rotateY(90deg)";
})