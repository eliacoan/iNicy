"use strict";
class Phrase {
    constructor(id, author, sentence) {
        this.id = id;
        this.author = author;
        this.sentence = sentence;
    }
}
class Utils {
    static rnd(value = 100) {
        return Math.floor(Math.random() * value);
    }
    static rndRange(min = 0, max = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    static chance(threshold = 50) {
        return this.rnd() < threshold;
    }
    static rollD4() {
        return this.rndRange(1, 4);
    }
    static rollD6() {
        return this.rndRange(1, 6);
    }
    static rollD8() {
        return this.rndRange(1, 8);
    }
    static rollD10() {
        return this.rndRange(1, 10);
    }
    static rollD20() {
        return this.rndRange(1, 20);
    }
    static log(text) {
        console.log('INF    ' + text);
    }
    static err(text) {
        console.log('ERR    ' + text);
    }
    static wrn(text) {
        console.log('WRN    ' + text);
    }
    static cookieSet(key, value, expiration) {
        var d = new Date();
        d.setTime(d.getTime() + (expiration * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    }
    static cookieGet(key) {
        var name = key + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    static cookieCheck(key) {
        var c = this.cookieGet(key);
        if (c != "") {
            return true;
        }
        else {
            return false;
        }
    }
    static lpad(t, w = 3) {
        let zeroes = new Array(w + 1).join("0");
        return (zeroes + t).slice(-w);
    }
}
let backgroundColors = [
    { key: 'Chiaro', value: 'c0bfbf' },
    { key: 'Scuro', value: '272524' },
    { key: 'Blu', value: '043c64' },
    { key: 'Rosso', value: '973b1f' },
    { key: 'Giallo', value: 'd6962e' },
    { key: 'Verde', value: '386357' },
    { key: 'Viola', value: '6e2586' }
];
let blurs = [
    { key: 'No', value: 0 },
    { key: 'Leggera', value: 2 },
    { key: 'Media', value: 6 },
    { key: 'Pesante', value: 10 }
];
let fonts = [
    { key: 'Amatic', value: 'amatic' },
    { key: 'Caveat', value: 'caveat' },
    { key: 'Coming soon', value: 'comingsoon' },
    { key: 'Euphoria', value: 'euphoria' },
    // { key: 'Gaegu', value: 'gaegu'},
    { key: 'Nanum', value: 'nanum' },
    { key: 'Nothing', value: 'nothing' }
];
let foregroundColors = [
    { key: 'Chiaro', value: 'f0efef' },
    { key: 'Scuro', value: '454140' },
    { key: 'Blu', value: '034f84' },
    { key: 'Rosso', value: 'c1502e' },
    { key: 'Giallo', value: 'feb236' },
    { key: 'Verde', value: '588c7e' },
    { key: 'Viola', value: '9934bb' }
];
let phrases = [];
phrases.push(new Phrase(0, 'Madre Teresa di Calcutta', 'Non c\'è momento migliore di questo per essere felice.'));
phrases.push(new Phrase(0, 'Bob Marley', 'Si sbaglia perché non si è perfetti.'));
phrases.push(new Phrase(0, 'Freddie Mercury', 'Si può essere tutto ciò che si vuole.'));
phrases.push(new Phrase(0, 'Pablo Neruda', 'Ho sentito una carezza sul viso arrivare fino al cuore.'));
phrases.push(new Phrase(0, 'Renzo Piano', 'Viaggiando si può capire che le differenze sono un valore e non un problema.'));
phrases.push(new Phrase(0, 'Charlie Chaplin', 'Canta, balla, ridi e vivi intensamente ogni giorno della tua vita.'));
phrases.push(new Phrase(0, 'Jim Morrison', 'La vita è come uno specchio: ti sorride se la guardi sorridendo.'));
phrases.push(new Phrase(0, 'Anonimo', 'Nella vita non contano i passi che fai, né le scarpe che usi, ma le impronte che lasci.'));
phrases.push(new Phrase(0, 'Anonimo', 'Qualunque sia la prigione che ti costruisci non dimenticare di fare anche le chiavi.'));
phrases.push(new Phrase(0, 'Anonimo', 'Il segreto della felicità è la libertà.'));
phrases.push(new Phrase(0, 'Anonimo', 'Dai sempre il massimo.'));
phrases.push(new Phrase(0, 'Anonimo', 'Fai del bene a te stesso facendo del bene agli altri.'));
phrases.push(new Phrase(0, 'Anonimo', 'Guarda avanti perchè è lì che stai andando.'));
phrases.push(new Phrase(0, 'Anonimo', 'Che il sorriso sia sempre nella tua vita.'));
phrases.push(new Phrase(0, 'Anonimo', 'Dopo il temporale esce sempre il sole: sii paziente.'));
let pictures = [
    { key: 'Acqua', value: 'water' },
    { key: 'Alberi', value: 'trees' },
    { key: 'Baia', value: 'bay' },
    { key: 'Campi', value: 'fields' },
    { key: 'Canyon', value: 'canyon' },
    { key: 'Cascata', value: 'fall' },
    { key: 'Cielo', value: 'sky' },
    //{ key: 'COLLINE', value: 'hills' },
    { key: 'Accogliente', value: 'cozy' },
    { key: 'Deserto', value: 'desert' },
    { key: 'Falò', value: 'bonfire' },
    { key: 'Fiori', value: 'flowers' },
    { key: 'Foglie', value: 'leaves' },
    { key: 'Foresta', value: 'wood' },
    { key: 'Inverno', value: 'winter' },
    { key: 'Lago', value: 'lake' },
    { key: 'Montagna', value: 'atop' },
    { key: 'Nuvole', value: 'clouds' },
    { key: 'Oceano', value: 'ocean' },
    { key: 'Primavera', value: 'spring' },
    { key: 'Ruscello', value: 'brook' },
    // { key: 'Spazio', value: 'space' },
    { key: 'Tramonto', value: 'twilight' },
    { key: 'Tropicale', value: 'tropical' }
];
let shadows = [
    { key: 'Si', value: true },
    { key: 'No', value: false }
];
let sizes = [
    { key: 'S', value: 2 },
    { key: 'M', value: 3 },
    { key: 'L', value: 4 }
];
let types = [
    { key: 'Colore', value: 'solid' },
    { key: 'Immagine', value: 'picture' }
];
let vignettes = [
    { key: 'Assente', value: '0' },
    { key: 'Leggera', value: '1' },
    { key: 'Pesante', value: '2' }
];
class phrasesEngine {
    static Init() {
        let i = 0;
        phrases.forEach(phrase => {
            phrase.id = ++i;
        });
    }
    static Get() {
        return phrases[Utils.rnd(phrases.length)];
    }
}
