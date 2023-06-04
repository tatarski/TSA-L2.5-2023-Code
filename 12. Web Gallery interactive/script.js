let big_kartinka_element, opisanie_element, prev_button_element,
    next_button_element;    // Променливи, пазещи HTML елементи
let nomer_kartinka = 0;
let imena_na_kartinki;
let opisaniq_na_kartinki = ["ZELKA", "OBELKA", "KARTOF"];
let zaglaviq_na_kartinki;
function onNextClick() { // Като кликна върху NEXT_BUTTON, какво да става
    nomer_kartinka++; // Ако стане твърде голямо - да превърта
    if(nomer_kartinka >= imena_na_kartinki.length) {
        nomer_kartinka = 0;
    }   // nomer_kartinka = (nomer_kartinka+1)%imena_na_kartinki.length
    big_kartinka_element.src = imena_na_kartinki[nomer_kartinka];
    zaglavie_element.innerHTML = zaglaviq_na_kartinki[nomer_kartinka];
}
function onPrevClick() { // Като кликна върху NEXT_BUTTON, какво да става
    nomer_kartinka--; // Ако стане твърде голямо - да превърта
    if(nomer_kartinka < 0) {
        nomer_kartinka = imena_na_kartinki.length - 1;
    }   // nomer_kartinka = (nomer_kartinka+1)%imena_na_kartinki.length
    big_kartinka_element.src = imena_na_kartinki[nomer_kartinka];
    zaglavie_element.innerHTML = zaglaviq_na_kartinki[nomer_kartinka];
}
function onBodyLoad() { // Като страницата се зареди - какво да става
    opisanie_element = document.getElementById("kartinka_opisanie");
    big_kartinka_element = document.getElementById("big-kartinka");
    prev_button_element = document.getElementById("prev_button");
    next_button_element = document.getElementById("next_button");
    zaglavie_element = document.getElementById("kartinka-zaglavie");
    next_button_element.onclick = onNextClick;
    prev_button_element.onclick = onPrevClick;
    let malki_kartinki = document.querySelectorAll("div#img-select > span > img")
    imena_na_kartinki = [];
    for(let i = 0; i < malki_kartinki.length; i++) {
        imena_na_kartinki[i] = malki_kartinki[i].src;
    }
    let zaglaviq = document.querySelectorAll("div#img-select > span > h3")
    zaglaviq_na_kartinki= [];
    for(let i = 0; i < malki_kartinki.length; i++) {
        zaglaviq_na_kartinki[i] = zaglaviq[i].innerHTML;
    }
}