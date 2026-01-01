//RANDOM PASSWORD GENERATOR

function generatepassword(passwordlength ,includelowercase, includeuppercase , includenumber, includesymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+-="

    let allowedchars = "";
    let password = "";


    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includenumber ? numberchars : "";
    allowedchars += includesymbols ? symbolchars : "";
    
    if(passwordlength <= 0){
        return `(Password length must be at least 1)`;
    }
    if(allowedchars.length === 0){
        return`(At least 1 set of charecter needs to be selected)`;
    }
    
    for(let i = 0; i < passwordlength; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;
}


const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumber = true;
const includesymbols = true;

const password = generatepassword(passwordlength ,
                                 includelowercase ,
                                 includeuppercase, 
                                 includenumber, 
                                 includesymbols);

 console.log(`Generated Password: ${password}`);                                