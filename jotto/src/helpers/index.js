export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetteSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));

    return [...secretLetteSet].filter(letter => guessedLetterSet.has(letter)).length;
};