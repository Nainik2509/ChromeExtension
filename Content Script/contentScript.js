// If url contains bbc.com/sport

if (window.location.href.includes('bbc.com/sport')) {

    // Replace top story
    document.querySelector('.gs-c-promo-heading').innerText = 'A new headline'

    // Replace top paragraph
    document.querySelector('.gs-c-promo-heading').parentElement.querySelector('p').innerText = 'A new block of summary information.'

}