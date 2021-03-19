const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteInputElement = document.getElementById("quoteInput");



function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(res => res.json())
        .then(data => data.content)
}


quoteInputElement.addEventListener('input', () => {
    // console.log('change')
    const arrayValue = quoteInputElement.value.split('');
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.remove('correct');
            characterSpan.classList.add('incorrect');
            correct = false
        }
    })

})

async function renderNewQuote() {
    const quote = await getRandomQuote();
    // console.log(quote);
    quoteDisplayElement.innerHTML = '';
    // Poszczególne znaki zamienia w tablicę
    quote.split('').forEach(char => {
        const character = document.createElement('span');
        // character.classList.add('correct');
        character.innerText = char;
        quoteDisplayElement.appendChild(character)
    })
}


renderNewQuote();