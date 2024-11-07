{
    //Problem 8:
    type Person = {
        name: string,
        age: number,
        email: string
    };
    const person: Person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {

        for(let key of keys){
            if(!(key in obj)){
                return false
            }
        }
        return true;
    }

    const checkValidKeys = validateKeys(person, ["name", "age"])
    // console.log(checkValidKeys)
}