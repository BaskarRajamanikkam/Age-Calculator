const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');




const calculateAge = () =>{
    const birthdayValue = inputEl.value;
    let message = resultEl.innerText;
    let newMessage = 'Please select your birth date';

    if(birthdayValue === ''){
        resultEl.innerText = newMessage;
        resultEl.style.color = 'red';
        setTimeout(()=>{
            resultEl.innerText = '';
            setTimeout(()=>{
                resultEl.innerText = message;
                resultEl.style.color = 'black';
            },100)
        },1000)
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
        resultEl.style.color = 'green';
    }
}

function getAge (birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener('click',calculateAge);