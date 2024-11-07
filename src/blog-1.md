heading 2 > The significance of union and intersection types in Typescript:

TypeScript, A statically typed superset of Javascript,
that offers developers a lot of powerful features to enhance their code safety and maintainability. 
Today we will learn about "union" and "intersection" types.


heading 3 > Concept of Union Types

Basically union types enable us to define types that can hold different kinds of values in a single type. Below here we defined a function that can accept either string or numbers. using union types we can handle both scenarios correctly.  lets give a example:

code start > 

type PersonAge = number | string;

function handleAge(name: PersonAge) {

  if (typeof name === "number") {
    return 'This person age is a number'

  } else if (typeof name === "string") {
    return 'This person age is a number'
  }
}

const checkAge = handleAge('26'); // Output: This person age is a string
const checkAge = handleAge(50) // Output: This person age is a number

code end >

Here , handleAge can take either a string or a number as a argument. if we try to passing different types then it will show error during compilation , ensuring type safety.


heading 3 > Concept of Intersection Types


For Intersection types in TypeScript combine multiple types into a single type, allowing developers to create new types from other types.  lets give a example:

code start >

// Intersection type example

// Here we  the Student type
type Student = {
  name: string;
  age: number;
};

// Here we define the Boy type
type Boy = {
  sports: {
    favoriteSport: string;
    teamPosition: string;
  };
  haveFootball: boolean;
};


// Create an intersection type that combines Student and Boy
type StudentBoy = Student & Boy;

const studentBoy1: StudentBoy = {
  name: "shohan",
  age: 15,
  haveFootball: true;
  sports: {
    favoriteSport: "Football",
    teamPosition: "Goalkeeper",
  },
};

function introduceStudent(player: StudentBoy) {
  return `${player.name} is passionate about ${player.sports.favoriteSport}. 
    He plays as a ${player.sports.teamPosition} for the school team and always carries his ${player.have}.`;
}

console.log(introduceStudent(studentBoy1));

code end >


In this example , we define Student and Boy types and then create a StudentBoy types type by intersecting them. The resulting StudentBoy type holds all properties from both Student and Boy types.


heading 3 >> Conclusion

Union and intersection types are powerful tools that enhance the flexibility and expressiveness of TypeScript.
By employing union and intersection types, you can enhance code safety and readability, making it easier to maintain and scale applications with confidence.
So, go ahead and experiment with union and intersection types to unleash the full potential of TypeScript in your projects!




