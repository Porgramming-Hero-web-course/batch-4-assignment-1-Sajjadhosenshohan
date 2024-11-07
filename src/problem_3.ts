{
    // Problem 2:
    const countWordOccurrences = (sentence: string, word: string): number => {

        let count = 0;

        const Sentence = sentence.split(' ');

        for (let singleWord of Sentence) {

            if (singleWord === word) {
                count++;
            }
        }

        return count;
    }


    const wordCount = countWordOccurrences("I love typescript", "typescript");
    // console.log(wordCount)


}