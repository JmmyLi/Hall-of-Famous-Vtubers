/**
 * JavaScriptQuick Reference:
 *
 * Access an element: document.getElementById("idName")
 *
 * Change the inner content of an element: element.innerHTML = "contents"
 * @example document.getElementById("output").innerHTML = "foobar"
 *
 * Change the class of an element: element.className = "className"
 * @example document.getElementById("output").className = "highlight"
 */
// const LANG = document.getElementsByClassName('changeLang')
// const OUTPUT = document.getElementById('output')

//Set variables
const LEARNMORE = document.getElementById('learnMore')
const MORE = document.getElementById('more')
let isHide = true

//Add event listeners
LLEFT.addEventListener('click', function() { changeLang() })
LRIGHT.addEventListener('click', function() { changeLang() })

LEARNMORE.addEventListener('click', function() {
    if (isHide) {
        isHide = false
        MORE.style.display = 'block'
    } else {
        isHide = true
        MORE.style.display = 'none'
    }
})

//Set functions
function changeLang() {
    if (LLEFT.innerHTML == 'English')
        window.location.href = "Hall of Famous Vtubers.html"
    else
        window.location.href = "Hall of Famous Vtubers-CH.html"
}