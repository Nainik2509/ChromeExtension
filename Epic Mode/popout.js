document.querySelector('button.play').addEventListener('click', function () {
    var selTrack = document.querySelector('select').value

    chrome.runtime.sendMessage({ name: "playTrack", track: selTrack })
})

document.querySelector('button.pause').addEventListener('click', function () {
    var selTrack = document.querySelector('select').value

    chrome.runtime.sendMessage({ name: "pauseTrack" })
})