// ===================== global dom ================
const 
  styleSwitcherToggler = document.querySelector(".style-switcher-toggler"),
  alternateStyle = document.querySelectorAll(".alternate-style"),
  allHiddenSections = document.querySelectorAll('.section'),
  boxes = document.querySelectorAll('.span'),
  dayNight = document.querySelector(".day-night"),
  mainContainer = document.querySelector('main');       
  const isColorModeDark = true
// =================== document dom onload =================

document.addEventListener("DOMContentLoaded", ()=> 
{
  console.log(localStorage.getItem('colorMode'))
  if(localStorage.getItem('colorMode') == "false") 
  document.body.className = 'light';
  
  else 
  document.body.className ='dark'

  if (Boolean(!localStorage.getItem('themeColor'))) 
  mainContainer.className = 'color-1';
  else
  mainContainer.className = localStorage.getItem('themeColor');
})

// ================= window onload ================
window.addEventListener("load", () =>
 {

if (document.body.classList.contains("dark"))
{
dayNight.querySelector("i").classList.add("fa-sun")
console.log("it's dark")
}
else 
{
dayNight.querySelector("i").classList.add("fa-moon")
console.log('it is not dark')
}
})

// ===================== nav toggler ====================
const navToggler = document.getElementById("nav-toggler")
navToggler.onclick = () => removeAside();
function removeAside()
{
  if (navToggler.querySelector("i").classList.contains("fa-bars"))

  for (const box of boxes)
  {
     box.classList.add('on');
    navToggler.querySelector("i").classList.add("fa-times");
    navToggler.querySelector("i").classList.remove("fa-bars");
  }
  else 

  for (const box of boxes)
  {
    box.classList.remove('on');
    navToggler.querySelector("i").classList.add("fa-bars");
    navToggler.querySelector("i").classList.remove("fa-times");
  }

}


// Get the container element
const btnContainer = document.getElementById("side-nav");

const  btns = btnContainer.getElementsByClassName("navlist");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
    console.log(current[0])
  });
  }
  function removeHidden(sections)
  {
    allHiddenSections.forEach((section) => 
    {
      if (sections === section.getAttribute('id')) {
        section.classList.remove('hidden');
        section.classList.add('show');
      }
      else
      {
        section.classList.add('hidden');
        section.classList.remove('show');
      }

      section.addEventListener( "scroll", ()=> {
        document.querySelector(".style-switcher").classList.remove('open')
      })
    })
}

// ===================== toggle style switcher =====================
styleSwitcherToggler.onclick = () => toggleStyleSwitcher()
 
function toggleStyleSwitcher() {
   document.querySelector(".style-switcher").classList.toggle("open")
}


// ===================== theme colours =====================
function setActiveStyle(btnColor) { checkChangedColor(btnColor);  }

colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
function checkChangedColor(btnColor)
{
  colors.forEach((color) =>
  {
    if(btnColor === color)
    {
      var currentColor = mainContainer.className = color;
      localStorage.setItem("themeColor", currentColor);
      console.log(color);
      iscolorChanged = true;
    }
  })
  
}


// ===================== Theme light and dark mode =====================

dayNight.onclick = () => {
  document.body.classList.toggle('dark');

  localStorage.setItem("colorMode", document.body.classList.contains('dark'))
  dayNight.querySelector("i").classList.toggle("fa-sun")
  dayNight.querySelector("i").classList.toggle("fa-moon")
}


const skillPercents = document.querySelectorAll('.skill-percent')
const progressIn = document.querySelectorAll('.progress-in')
function myskillPercentage ()
{
  skillPercents.forEach((skillPercent) =>
{
  var skillAttr = skillPercent.getAttribute('id')
  
  for (let i = 0; i < progressIn.length; i++) {
    if (skillAttr === progressIn[i].getAttribute('id')) {
      progressIn[i].style.width =  skillPercent.innerText;
      console.log(progressIn[i].innerText);
    }
  }
})
}
myskillPercentage()