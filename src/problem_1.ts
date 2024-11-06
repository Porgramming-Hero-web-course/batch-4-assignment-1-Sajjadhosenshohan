{
    // Problem 1:
    //Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(arr: number[]) {
        const total = arr.reduce((sum, num) => sum + num, 0)
        return total;
    }


    const SumOfNumbers = sumArray([1, 2, 3, 4, 5]);
    console.log(SumOfNumbers)
}