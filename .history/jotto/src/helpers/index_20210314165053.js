export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetteSet = new Set(secretWord.split(''));
    const guessedWord = new Set(secretWord.split(''));

    return [...secretLetteSet].filter(letter => guessedLetterSet.has(letter))
};