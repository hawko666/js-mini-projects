const getButtons = document.querySelectorAll('.button');
const getBody = document.body;

getButtons.forEach( (button) => {
    button.addEventListener('click', (e) =>{
        if(e.target.id){
            getBody.style.backgroundColor = e.target.id;
            getBody.style.transition = "0.2s ease-in"
        }
    })
})