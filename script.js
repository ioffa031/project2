//for animating letters 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeFont(letterId, fontClasses) {
    const randomIndex = getRandomInt(0, fontClasses.length - 1);
    const randomFontClass = fontClasses[randomIndex];
    document.getElementById(letterId).className = ''; 
    document.getElementById(letterId).classList.add(randomFontClass);
}
  
const fontClasses = ['font-swirly', 'font-hostage', 'font-serif', 'font-default', 'font-futuristic', 'font-blackletter', 'font-scratchy', 'font-salted'];

function animateFontChange() {
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        changeFont(letterId, fontClasses);
        
    }
}

setInterval(animateFontChange, 1000);

// for resetting text back to default font
function resetText() {
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        document.getElementById(letterId).classList.remove(...fontClasses);
        document.getElementById(letterId).classList.add('font-default');
    }
    localStorage.setItem('textReset', 'true'); 
}

if (localStorage.getItem('textReset') === 'true') {
    resetText();
}


document.querySelector('.text-normal').addEventListener('click', resetText);

document.querySelector('.text-normal').addEventListener('click', function(){
    for (let i = 1; i <= 20; i++) {
        const letterId = 'letter' + i;
        document.getElementById(letterId).classList.add('font-default');
    }
})


// for clicking letters and images popping up on click
const letterElements = document.querySelectorAll('.letter16, .letter17, .letter18');

var translatedContent = document.querySelector('.landing-text')

var hiddenText = document.querySelector('.overflowing-aa');


// document.addEventListener("DOMContentLoaded", function() {
//     var containerA = document.querySelector('.container-a');
//     var landingText = document.querySelector('.landing-text');

//     containerA.addEventListener('mouseover', function() {
//         landingText.style.transform = 'translateY(-50%)';
//     });

//     containerA.addEventListener('mouseout', function() {
//         landingText.style.transform = 'none';
//     });
// });


letterElements.forEach(element => {
    element.addEventListener("click", function() {
        hiddenText.style.display = "block";
    })
})


document.addEventListener("DOMContentLoaded", function(){
    function toggleImages(buttonId, imageClass) {
        var showButton = document.getElementById(buttonId);
        var hiddenImages = document.querySelectorAll('.' + imageClass);

        showButton.addEventListener('click', function(){
            hiddenImages.forEach(function(image){
                if (image.style.display === 'none'|| image.style.display === '') {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    }
    toggleImages('letter16', 'image-aa');
    toggleImages('letter17', 'image-aaa');
    toggleImages('letter18', 'image-aaaa');
})


// for clicking on the a's and getting the dropdowns
var dropdownAaa = document.querySelector('.container-a')
var overflowingAaa = document.querySelector('.overflowing-aa')

dropdownAaa.addEventListener('click', function(){
    if (overflowingAaa.style.display === 'none') {
        overflowingAaa.style.display = 'block';
      } else {
        overflowingAaa.style.display = 'none';
      }
})

// for clicking on individual images within the aa's to get more information

// document.addEventListener('click', function() {
//     ____.forEach(function(image) {

//     })
// })



//for blurring background on image click

document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-aaa, .image-aa, .image-aaaa');
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        var isEnlarged = image.classList.contains('enlarged-image');
        images.forEach(function(img) {
          img.classList.remove('clear-image');
          img.classList.remove('enlarged-image');
          img.classList.add('blur-background')
        });
        
        document.querySelector('.landing-text').classList.add('blur-background');
  
        image.classList.add('clear-image');

        image.classList.toggle('enlarged-image');
      });
    });
});







  