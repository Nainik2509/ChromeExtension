
function getRandomNumber(num) {
    var max = (num + 1)
    return Math.floor(Math.random() * Math.floor(max))
}

//  Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name == 'fetchWords') {
        // Send response

        // We call API
        const apiKey = 'OUR_API_KEY'
        const dateStr = new Date().toISOString().slice(0, 10) // 2021-12-23
        const apiCall = `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${dateStr}&api_key=${apiKey}}`
        // Wait for response
        // Send the response

        const wordsObj =
            ["perdurable ", "perdurable ", "perdurable ", "perdurable "]
        const wordsDescObj =
            ["Description of the word ", "Description of the word ", "Description of the word ", "Description of the word "]

        var number = getRandomNumber(4)

        response({ word: wordsObj[number], desc: wordsDescObj[number] })
    }
})