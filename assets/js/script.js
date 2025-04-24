function sendMail() {

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const form = this;

        let parms = {
            name: document.getElementById('name').value,
            email: document.getElementById('user_email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value

        }

        emailjs.send("service_5or5t18", "template_norsse8", parms)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for contacting me! I will be in touch with you shortly. Thanks!');
                form.reset()
            }, function (error) {
                console.log('FAILED...', error);
                alert('Email not sent! Please contact me at manavbatra26@gmail.com. Thanks!');
            });
    });
}






// function sendMail(){
//     let parms = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('user_email').value,
//         phone: document.getElementById('phone').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//
//     }
//
//
//     emailjs.send("service_5or5t18", "template_norsse8", parms)
//         .then(() =>
//         { alert('Thank you for contacting me! I will be in touch with you shortly, Thanks!')
//             form.reset();
//         }).catch((error) => ("Email not sent! Please contact me at manavbatra26@gmail.com. Thanks!"));
// }


// emailjs.send("service_5or5t18", "template_norsse8", parms)
//     .then(function (response) {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Your message has been sent! Manav will be in touch with you shortly, thanks!');
//         form.reset();
//     }, function (error) {
//         console.log('FAILED...', error);
//         alert('Failed to send your message. Please try again later.');
//     });