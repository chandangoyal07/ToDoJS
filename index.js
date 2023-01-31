let input = document.querySelector('input')
let button = document.querySelector('button')
let addtodo = document.querySelector('.todo')

// Event Applied Keypress

input.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        const paragraph1= document.createElement('h1')
        paragraph1.innerText = input.value
        addtodo.appendChild(paragraph1)
        input.value=""
   
    paragraph1.addEventListener('click',function(){
        paragraph1.style.textDecoration='line-through'
    })

    paragraph1.addEventListener('dblclick',function(){
        paragraph1.remove(paragraph1)
    })
}
})


//Event Applied Click

button.addEventListener('click',function(){
    const paragraph = document.createElement('h2');
    paragraph.innerText = input.value;
    addtodo.appendChild(paragraph)
    input.value = ""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})

// Event Applied DoubkeClick

button.addEventListener('dblclick',function(){
    const paragraph = document.createElement('h3');
    paragraph.innerText = input.value;
    addtodo.appendChild(paragraph)
    input.innerText = ""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})


// Event applied Mouseover


button.addEventListener('mouseover',function(){
    const paragraph = document.createElement('h4');
    paragraph.innerText = input.value;
    addtodo.appendChild(paragraph)
    input.innerText = ""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})

// Event Applied Mouseout

button.addEventListener('mouseout',function(){
    const paragraph = document.createElement('h5');
    paragraph.innerText = input.value;
    addtodo.appendChild(paragraph)
    input.innerText = ""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})







