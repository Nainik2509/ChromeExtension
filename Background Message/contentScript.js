// Send Message To Background
chrome.runtime.sendMessage({ name: "message" }, (response) => {
    // Wait for response

    // Update Display on Content Script
    document.querySelector("body").innerHTML = response.text
})