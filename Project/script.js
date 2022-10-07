//create a function to change the background color
//setBackground
const $body = document.querySelector('body')
function setBackgroundColor(color){
    $body.style.backgroundColor = color
}

// invoke
//setBackground('red')

//setTitle
function setTitle(message){
    const $h1 = document.querySelector('h1')
    $h1.textContent = message
}
// invoke
//setTitle('Hey)

//setTitle
function setDescription(message){
    const $p = document.querySelector('p')
    $p.textContent = message
}

function setBackgroundColor(color){
 $body.style.backgroundColor = color

}

//invoke
//setDescription

//setFontColor
function setFontColor(color){
    $body.style.color = color
}


function setTheme(theme){
$body.className = theme
}
