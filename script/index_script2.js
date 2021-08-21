// in this js file we will get some basic level javascript support for our index page.

// 
// 
// 
// contact input box

// color beep of direct message field when click the direct message icon in contact section
let direct_message = document.getElementById('direct_message');
direct_message.addEventListener('click', colorbeep);
let flag = false; // when flag = true beep color will be off

// getting input fields
let name = document.getElementById('direct_message_name');
let email = document.getElementById('direct_message_email');
let text = document.getElementById('direct_message_text');
let submit = document.getElementById('direct_message_button');

// this fucntion will produce beep color
async function colorbeep(event) {
    for (var i = 1; i != 0; i++) {
        if (i % 2 != 0 && flag == false) {
            name.setAttribute('style', 'border: 2px red solid;');
            email.setAttribute('style', 'border: 2px red solid;');
            text.setAttribute('style', 'border: 2px red solid; height: 200px; width: 100%;');
        }
        else if (i % 2 == 0 && flag == false) {
            name.setAttribute('style', 'border: null;');
            email.setAttribute('style', 'border: null;');
            text.setAttribute('style', 'border: null; height: 200px; width: 100%;');
        }
        await sleep(1000);
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// stopping color beep when click any input box
name.addEventListener('click', stopColorBeep);
email.addEventListener('click', stopColorBeep);
text.addEventListener('click', stopColorBeep);

function stopColorBeep(event) {
    flag = true;
    name.setAttribute('style', 'border: null;');
    email.setAttribute('style', 'border: null;');
    text.setAttribute('style', 'border: null; height: 200px; width: 100%;');
}

// check if all field is filled or not when click submit button
submit.addEventListener('click', checkAllField);

function checkAllField(event) {
    // if any field is empty show color beep
    if (name.value == "" || email.value == '' || text.value == '') {
        flag = false;
        colorbeep();
    }
    else if (ValidateEmail(email.value) == false) {
        email.setAttribute('style', 'border: 2px red solid;');
    }
    else {
        email.setAttribute('style', 'border: null;');
        // send data to admin
        // currently disable
        alert("Sorry! This process is Under Maintenance. Send message via facebook or gmail.")
    }
}

// email address checker
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

// 
// 
// 