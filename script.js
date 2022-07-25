let passwordField = document.querySelector('#passwd');
let confirmPswdContainer = document.querySelector('.cpassword-container');
let confirmPswdField = document.querySelector('#cpasswd');
let rightSection = document.querySelector('.right-section');

//The paragraph that tells the user the password requirements
var label = document.createElement("p");
var text = document.createTextNode("Password must be at least 8 characters and from which at least 1 is letter!");
label.appendChild(text);
confirmPswdContainer.appendChild(label); //Appending the paragraph to the screen 
/*Styling the paragraph */
label.style.color = '#596D48';
label.style.fontSize='14px';
label.style.position='absolute';
label.style.top='70px';
label.style.left='10px'
label.style.width = '300px'



let checkPassword = function(){    

    /*If there is a label already, it will be removed. Once the user starts typing his password, the password requirements paragraph will dissapear */
    if(confirmPswdContainer.contains(label)){
        label.innerHTML='';
    }

    if(passwordField.validity.valid){ //If the inserted password is valid
        /*Styling the input fields */
        passwordField.style.border = '2px solid rgb(180, 175, 175)';
        confirmPswdField.style.border = '2px solid rgb(180, 175, 175)';

        if(passwordField.value === confirmPswdField.value){ //If the password and confirmed password match

            /*Styling the input fields */
            passwordField.style.border = '2px solid green';
            confirmPswdField.style.border = '2px solid green';
            
            /*Create the text of the label that confirms the passwords match*/        
            text = document.createTextNode("Passwords match!");
            label.appendChild(text);
            confirmPswdContainer.appendChild(label);
            /*Style the label*/
            label.style.color = '#596D48';
            label.style.fontSize='14px';
            label.style.position='absolute';
            label.style.top='70px';
            label.style.left='10px'

            
            } else{ //If the passwords do not match

                /*Styling the input fields */
                passwordField.style.border = '2px solid rgb(255, 0, 0)';
                confirmPswdField.style.border = '2px solid rgb(255, 0, 0)';

                /*Create the text of the label that confirms the passwords do not match and style it*/        
                text = document.createTextNode("Passwords do not match!");
                label.appendChild(text);
                confirmPswdContainer.appendChild(label);
                label.style.color = 'rgb(255, 0, 0)';
                label.style.fontSize='14px';
                label.style.position='absolute';
                label.style.top='70px';
                label.style.left='10px'
            }


    } else{//If the inserted password is invalid

        /*Creating the text of the label that says the password is invalid and styling it*/        
        text = document.createTextNode("Invalid password!");
        label.appendChild(text);
        label.style.color = 'rgb(255, 0, 0)';
        label.style.fontSize='14px';
        label.style.position='absolute';
        label.style.top='70px';
        label.style.left='10px'
        confirmPswdContainer.appendChild(label);

        /*Styling the input fields */
        passwordField.style.border = '2px solid rgb(255, 0, 0)';
        confirmPswdField.style.border = '2px solid rgb(255, 0, 0)';
    }

    if(passwordField.value.length === 0 && confirmPswdField.value.length === 0){//If both the password and confirm password fields are empty
        /*Styling the input fields */
        passwordField.style.border = '1px solid rgb(180, 175, 175)';
        confirmPswdField.style.border = '1px solid rgb(180, 175, 175)';

        label.innerHTML='';//Removing every existing text label

        /*Returning the default text that tells the user the password requirements and styling that text. */
        text = document.createTextNode("Password must be at least 8 characters and from which at least 1 is letter!");
        label.appendChild(text);
        confirmPswdContainer.appendChild(label); 
        label.style.color = '#596D48';
        label.style.fontSize='14px';
        label.style.position='absolute';
        label.style.top='70px';
        label.style.left='10px'
        label.style.width = '300px'
    };
};