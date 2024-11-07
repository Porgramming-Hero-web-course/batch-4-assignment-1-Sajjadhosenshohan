{
    //problem 5;
    function getProperty<T, K extends keyof T>(personInfo: T, key: K) {
        return personInfo[key]
    }

    
    type Person = {
        name: string;
        age: number
    }
    const person: Person = {
        name: "Alice",
        age: 30
    };
    const personProperty = getProperty(person, "name")
    // console.log(personProperty)
    
}