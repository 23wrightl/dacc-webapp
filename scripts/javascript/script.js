let submitButton = document.querySelector('#submitbutton');

function getInput(){
    let emailValue=document.getElementById('emailtext').value;
    let subjectValue=document.getElementById('subjecttext').value;
    let messageValue=document.getElementById('messagetext').value;

    //Need to link to seperate page!!
    document.getElementById('email_para').innerHTML+=emailValue;
    document.getElementById('subject_para').innerHTML+=subjectValue;
    document.getElementById('message_para').innerHTML+=messageValue;
}

submitButton.addEventListener('click',getInput);