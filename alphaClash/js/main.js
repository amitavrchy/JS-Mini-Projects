const startBtn = document.getElementById('play');
startBtn.addEventListener('click', function(){
    hideScreen('page1');
    showScreen('page2');
    const letter = continueGame();
    highlightText(letter);
})