function hideScreen(id) {
    const el = document.getElementById(id);
    el.classList.add("hidden");
}
function showScreen(id){
    const el = document.getElementById(id);
    el.classList.remove("hidden")
}
function continueGame(){
    const stringL = 'qwertyuiopasdfghjklzxcvbnm';
    const stringarr = stringL.split('');
    const index = Math.round(Math.random()*25);
    const letter = stringarr[index].toUpperCase();
    const artBoard = document.getElementById('artboard');
    artBoard.innerText = letter;
    return letter;
}
function highlightText(letter){
    const lower = letter.toLowerCase();
    const toHighlight = document.getElementById(lower);
    toHighlight.classList.add('bg-orange-400');
    toHighlight.classList.add('text-black');
}
