{
    // Problem 2:
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const countWordOccurrences = (sentence: string, word: string): number => {

        const convertedSentence = sentence.toLowerCase();
        const convertedWord = word.toLowerCase();

        let count = 0;

        const Sentence = convertedSentence.split(' ');

        for (let singleWord of Sentence) {

            singleWord = singleWord.replace(/[.,!?]/g, '');


            if (singleWord === convertedWord) {
                count++;
            }
        }

        return count;
    }


    const wordCount = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    console.log(wordCount)


}