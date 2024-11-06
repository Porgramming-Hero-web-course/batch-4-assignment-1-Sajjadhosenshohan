{
    // Problem 2:
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    function removeDuplicates(Arr: number[]): number[] {
        const removeDuplicates = Arr.filter((num, index, self) => {
            return self.indexOf(num) === index;
        });
        return removeDuplicates;
    }

    const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
    console.log(uniqueArray)

}