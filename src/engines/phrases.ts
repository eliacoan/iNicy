class phrasesEngine {
    static init() {
        let i = 0
        phrases.forEach(phrase => {
            phrase.id = ++i
        });
    }
    static Get(): Phrase {
        return phrases[Utils.rnd(phrases.length)]
    }
}