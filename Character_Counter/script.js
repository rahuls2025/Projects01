const textArea=document.getElementById('textarea');
const totalCounter=document.getElementById('total-counter');
const remaingCounter=document.getElementById('remaining-counter');

textArea.addEventListener('keyup', () => {
    updateCounter()
    
});

updateCounter()

function updateCounter(){
    totalCounter.innerText=textArea.value.length

   remaingCounter.innerText= textArea.getAttribute("maxlength") - textArea.value.length
}
