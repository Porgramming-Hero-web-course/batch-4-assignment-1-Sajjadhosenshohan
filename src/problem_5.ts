{
    //problem 5;
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.



    function getProperty<T, K extends keyof T>(personInfo: T, key: K) {
        return personInfo[key]
    }

    // Sample Input:
    type Person = {
        name: string;
        age: number
    }
    const person: Person = {
        name: "Alice",
        age: 30
    };
    const personProperty = getProperty(person, "name")
    console.log(personProperty)
    // Sample Output:
    // Alice;
}