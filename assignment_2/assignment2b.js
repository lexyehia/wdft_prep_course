
//magic eightball using If Else control flow

const numberofreplys = 2;
function ask() {

    // This only results in either a 1 or 2
    const choice = Math.floor(Math.random() * numberofreplys +1);

    let reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else


    */

    if (choice === 1) {
        reply = 'Random answer 1 :D';
        console.log(reply);
    } else if (choice === 2) {
        reply = 'Random answer 2 :D :D :D';
        console.log(reply);
    } else {
        reply = 'Somehow you broke the computer!!';
        console.log(reply);
    }

    return console.log(choice);
}

ask();

//magic eightball using switch case control flow

function askagain() {

    // This only results in either a 1 or 2
    const choice = Math.floor(Math.random() * numberofreplys +1);

    let reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else


    */

    switch(choice) {
        case 1:
            reply = 'Random answer 1 :D';
            console.log(reply);
            break;
        case 2:
            reply = 'Random answer 2 :D :D :D';
            console.log(reply);
            break;
        default:
            reply = 'Somehow you broke the computer!!';
            console.log(reply);
    }

    return console.log(choice);
}

askagain();

