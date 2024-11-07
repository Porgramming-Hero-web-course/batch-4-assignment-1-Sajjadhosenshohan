{
    // Problem 4:
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
    // console.log(circleArea)
    

    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    // console.log(rectangleArea)


}