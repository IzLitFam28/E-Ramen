function val(){
    let name = document.getElementById("name")
    let email = document.getElementById('email')
    let message = document.getElementById('message')

    if(name.value.length <= 6){
        alert("Name must be more than 6 characters!")
    }
    else if(!email.value.endsWith('@gmail.com')){
        alert("Must use gmail!")
    }
    else if(message.value.length <= 20){
        alert('Must be more than 20 characters!')
    }
    else if(!checkbox.checked){
        alert('Must check the box!')
    }
    else{
        open("thankYou.html")
    }
}