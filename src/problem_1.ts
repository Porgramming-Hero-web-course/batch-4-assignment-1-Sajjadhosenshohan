{
    // Problem 1:
    function sumArray(arr: number[]):number {
        const total = arr.reduce((sum, num) => sum + num, 0)
        return total;
    }


    const SumOfNumbers = sumArray([1, 2, 3, 4, 5]);
    // console.log(SumOfNumbers)
}