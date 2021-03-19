const text = document.getElementById("text");
let ans = document.getElementById("answer");
const URL = "http://quotes.stormconsultancy.co.uk/random.json";

fetch(URL)
    .then(data => data.json())
    // .then(data => console.log(data.quote))
    .then(function (data) {

        const quote = data.quote;
        // console.log(quote);
        text.innerText = quote;



        // get value from textarea
        ans.addEventListener("input", () => {


            // add words to array as a letter
            const letter = quote.split('');
            // console.log(letter);
            let words = ans.value;
            let answer = words.split('');
            // console.log(answer);
            // console.log(answer);
            let correct = true;
            console.log(letter);
            console.log(answer)
            answer.forEach((char, index) => {
                const character = answer[index];
                const char2 = letter[index];
                let span = document.createElement("span");
                span.innerText = words
                console.log(character)
                console.log(span)

                if (character == null) {
                    // console.log("null");
                    // span.classList.remove("correct")
                    // span.classList.remove("incorrect")
                }

                else if (character == char2) {
                    document.querySelector("h1").innerText = "correct";
                    console.log("correct");
                    span.classList.add("correct")

                } else {
                    console.log("Incorrect");
                    document.querySelector("h1").innerText = "incorrect";
                    span.classList.add("incorrect")
                    span.classList.remove("correct")

                }
            })
        })
    })