
const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

function printByLine(time) {
    asciiHeart.forEach((line, index) => {
        setTimeout(() => {
            process.stdout.write(line + "\n");
        }, index * time);
    });
}


printByLine(500)


function printByChart(time) {
    let delay = 0;

    for (let k = 0; k < asciiHeart.length; k++) {
        const chars = asciiHeart[i].split("");

        chars.forEach((char, index) => {

            setTimeout(() => {
                process.stdout.write(char);
                
                if (asciiHeart[k].length - 1 === index) {
                    console.log("")
                }

            }, delay);
            delay += time;
        });




    }
}


printByChart(50);

//No he encontrado errores en el código, asi que he cambiado algunas varaibles. i>k