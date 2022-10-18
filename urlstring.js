// write a function that when given url as a string,parse out just the domain name and returns it as a string.

// function -> url -> 

// http://www.gemograhy.com -> gemograhy
// https://www.freecodeacademy.com -> freecodeacademy
// www.stackoverflow.com -> stackoverflow


function urlString(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
}


console.log(urlString('http://github.com/application/employed/massively'))
console.log(urlString('http://www.zombie-bites.com/login'))
console.log(urlString('https://www.cnet.com'))
console.log(urlString('http://facebook.com/profile'))

