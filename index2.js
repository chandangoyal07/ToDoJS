
let item = document.querySelector('#item')
let todo= document.querySelector('#to-do')

item.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        additem(this.value)
        this.value=''
    }
})

const additem = (item) =>{
    const paragraph1 = document.createElement('li')
    paragraph1.innerHTML=`
    ${item}
    <i>❌ </i>
    `;


    paragraph1.addEventListener('click', function(){
        this.classList.toggle("done")
     
     })

    paragraph1.querySelector('i').addEventListener('click', function(){
        paragraph1.remove()
     })
    todo.appendChild(paragraph1); 
}

