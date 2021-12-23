
//  Listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.name == 'playTrack') {
        // Send response

        var trackName = msg.track;
        var audioEle = document.querySelector('.audio-element');
        audioEle.src = `${trackName}.mp3`
        audioEle.play()
    }
    if (msg.name == 'pauseTrack') {
        var audioEle = document.querySelector('.audio-element');
        audioEle.pause()
    }
})