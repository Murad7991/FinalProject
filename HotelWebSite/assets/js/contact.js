
//Contact information send

let name = document.querySelector('#name')
let email = document.querySelector('#email');
let description = document.querySelector('#description')

const button = document.querySelector('#send')
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let nameValid = document.querySelector('#nameValidation')
    let emailValid = document.querySelector('#emailValidation')
    let descriptionValid = document.querySelector('#descriptionValidation')
    if (name.value.trim() && email.value.trim() && description.value.trim()) {
        axios({
            method: "post",
            url: 'https://murad-mentor-default-rtdb.firebaseio.com/contact.json',
            data: {
                name: name.value,
                email: email.value,
                description: description.value,
            }
        })
            .then(() => {
                swal("Mesajınız uğurla göndərildi")
            })
        name.value = ''
        description.value = ''
        email.value = ''
    } else {
        function hiddenError() {
            nameValid.style.display = 'none'
            emailValid.style.display = 'none'
            descriptionValid.style.display = 'none'
        }
        if (name.value === null || name.value === ""){
            console.log('dsds')
            nameValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        } else if(email.value.length<9){
            emailValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        }else if (description.value === null || description.value === "") {
            descriptionValid.style.display = 'block'
            window.setInterval(hiddenError, 3000)
            return false;
        }
    }
})

