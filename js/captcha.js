var RC2KEY = '6LcNiycTAAAAACNczvms9M-JEwQ1I5Qdtjx5CrOx',
    doSubmit = false;

function reCaptchaVerify(response) {
    if (response === document.querySelector('.g-recaptcha-response').value) {
        doSubmit = true;
    }
}

function reCaptchaExpired () {
    /* do something when it expires */
}

function reCaptchaCallback () {
    grecaptcha.render('id', {
        'sitekey': RC2KEY,
        'callback': reCaptchaVerify,
        'expired-callback': reCaptchaExpired
    });
}

document.forms['form-name'].addEventListener('submit',function(e){
    if (doSubmit) {
        /* submit form or do something else */
    }
})
