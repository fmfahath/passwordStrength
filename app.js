let passEl = document.getElementById('password');
let msgEl = document.getElementById('message');
let strgEl = document.getElementById('strength');

passEl.addEventListener('input', () => {
    if(passEl.value.length > 0){
        msgEl.style.display = 'block';

        if(passEl.value.length < 4){
            passEl.style.borderColor = 'red';
            strgEl.innerHTML = 'weak';
            strgEl.style.color = 'red';
        }
        else if(passEl.value.length >= 4 && passEl.value.length < 8 ){
            passEl.style.borderColor = 'yellow';
            strgEl.innerHTML = 'medium';
            strgEl.style.color = 'yellow';
        }
        else{
            passEl.style.borderColor = 'rgb(4, 185, 4)';
            strgEl.innerHTML = 'strong';
            strgEl.style.color = 'rgb(4, 185, 4)';
        }
    }
    else{
        msgEl.style.display = 'none';        
    }
})