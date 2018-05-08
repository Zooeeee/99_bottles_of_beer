function main(a){
    function first_sentence(a){
    return a+` bottles of beer on the wall, `+a+` bottles of beer.`;
    };
    
    function second_sentence(a){
    if (a===2) 
    return `Take one down and pass it around, `+(a-1)+` bottle of beer on the wall.`;
    else
    return `Take one down and pass it around, `+(a-1)+` bottles of beer on the wall.`;
    };
    
    var result =``;
    var str=`` ;
    var b = a ;
    for(var i = 1 ; i<=100-b && i<=98; i++){
    str = `    `+first_sentence(100-i)+`\n`+
          `    `+second_sentence(100-i)+`\n`;
    result = result + str ;
    a = a - 1;
    };
    if(b === 1)
    result = result + 
    `    `+`1 bottle of beer on the wall, 1 bottle of beer.`+`\n`+
    `    `+`Take one down and pass it around, no more bottles of beer on the wall.`+`\n`+
    `    `+`No more bottles of beer on the wall, no more bottles of beer.`+`\n`+
    `    `+`Go to the store and buy some more, 99 bottles of beer on the wall.`+`\n`;
    return `\n`+result+`    `;
}
module.exports = main ;