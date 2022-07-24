let passwordField = document.querySelector('#passwd');
let confirmPswdContainer = document.querySelector('.cpassword-container');
let confirmPswdField = document.querySelector('#cpasswd');
let rightSection = document.querySelector('.right-section');

var label = document.createElement("p");//Label that will be displayed when the password and confirm 
//password values match or do not match


let checkPassword = function(){
    if(confirmPswdField.value.length > 0){
        /*If there is a label already, it will be removed */
        if(confirmPswdContainer.contains(label)){
            label.innerHTML='';
        }


        if(passwordField.value === confirmPswdField.value){
            passwordField.style.border = '2px solid green';
            confirmPswdField.style.border = '2px solid green';

            /*Create the text of the label that confirms the passwords match 
            and style the label*/        
            var text = document.createTextNode("Passwords match!");
            label.appendChild(text);
            label.style.color = '#596D48';
            label.style.fontSize='14px';
            label.style.position='absolute';
            label.style.top='70px';
            label.style.left='10px'
            
            confirmPswdContainer.appendChild(label); 
            } else{
            passwordField.style.border = '2px solid rgb(255, 0, 0)';
            confirmPswdField.style.border = '2px solid rgb(255, 0, 0)';

            var text = document.createTextNode("Passwords do not match!");
            label.appendChild(text);
            label.style.color = 'rgb(255, 0, 0)';
            label.style.fontSize='14px';
            label.style.position='absolute';
            label.style.top='70px';
            label.style.left='10px'
            
            confirmPswdContainer.appendChild(label);
        }
    }
}
