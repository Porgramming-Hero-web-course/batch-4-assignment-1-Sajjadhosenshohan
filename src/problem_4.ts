{
    // Problem 4:
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle",
        radius: 5
    }

    type Rectangle= {
        shape: "rectangle",
        width: 4,
        height: 6,
    }



    function calculateShapeArea(InitialShape:Circle | Rectangle) {
        const getShape = InitialShape.shape;

        if (getShape === 'circle') {
            return (Math.PI * InitialShape.radius * InitialShape.radius);
        }
        else if (getShape === 'rectangle') {
            return (InitialShape.width * InitialShape.height);
        } else {
            return 0;
        }
    }

    // Sample Input 1:
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea)
    // Sample Output 1:
    // 78.54;

    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea)

    // Sample Output 2:
    // 24;

}