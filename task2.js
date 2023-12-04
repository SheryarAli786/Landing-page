

 
function togglePageElementVisibility(what)  
{  
    var obj = typeof what == 'object'  
        ? what : document.getElementById(what);  
 if (obj.style.display == 'none')  
        obj.style.display = 'block';  
    else  
        obj.style.display = 'none';  
    return false;  
} 

function togglePageElementVisibility(you)  
{  
    var obj = typeof you == 'object'  
        ? you : document.getElementById(you);  
 if (obj.style.display == 'none')  
        obj.style.display = 'block';  
    else  
        obj.style.display = 'none';  
    return false;  
} 

function checkViewportSize() {
    const hiddenPortion = document.querySelector('.section2');
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 1400) {
        hiddenPortion.style.display = 'block';
    }
     else {
        hiddenPortion.style.display = 'none';
    }
}

// Listen for the window resize event and recheck the viewport size
window.addEventListener('resize', checkViewportSize);

// Call the function initially when the page loads
checkViewportSize();

