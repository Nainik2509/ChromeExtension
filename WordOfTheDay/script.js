// Send Message To Background
chrome.runtime.sendMessage({ name: "fetchWords" }, (response) => {
    // Wait for response

    console.log(response)

    document.querySelector('h1').innerHTML = response.word;
    document.querySelector('p').innerHTML = response.desc;
})