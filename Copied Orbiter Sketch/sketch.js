var screenSize = 500;
var numberOfOrbiters = 7;
var orbitThickness = 1;

var outerMarginSize = screenSize / 25;
var innerMarginSize = outerMarginSize / 2;
var spaceNotOccupiedByMargins = screenSize - (outerMarginSize * 2) -
      innerMarginSize * (numberOfOrbiters -1);
var orbitRadius = spaceNotOccupiedByMargins / numberOfOrbiters / 2;

var orbiterColors = [
    [163, 91, 89],
    [127, 83, 58],
    [200, 200, 150],
    [77, 120, 78],
    [130, 197, 209],
    [201, 138, 172],
    [190, 155, 209]
];

var orbiters = {};
var followers = {};

function getPixelCoordByPositionCoord(x, y) { // coordinates by position start at 1
    return [outerMarginSize + orbitRadius + innerMarginSize * (x-1) + orbitRadius * 2 * (x-1),
            outerMarginSize + orbitRadius + innerMarginSize * (y-1) + orbitRadius * 2 * (y-1)]
}


function setup() {

    createCanvas(screenSize, screenSize);
    background(240);

    for (let i = 2; i < numberOfOrbiters + 1; i++) {
        orbiters[[i, 1]] = new Orbiter(...getPixelCoordByPositionCoord(i, 1), -1, i, orbiterColors[i - 2]);
        orbiters[[1, i]] = new Orbiter(...getPixelCoordByPositionCoord(1, i), 1, i, orbiterColors[i - 2]);
    }

    for (let x = 2; x < numberOfOrbiters + 1; x++) {
        for (let y = 2; y < numberOfOrbiters + 1; y++) {
            followers[[x, y]] = new Follower(...getPixelCoordByPositionCoord(x, y),
                orbiters[[1, y]], orbiters[[x, 1]]);
        }
    }
}


function draw() {

    // if slow orbiter is finished and then some, reset.
    if (orbiters[[1, 2]].angle > 360 * 3.1) {
        background(220);
        for (let x = 2; x < numberOfOrbiters + 1; x++) {
            for (let y = 2; y < numberOfOrbiters + 1; y++) {
                orbiters[[1, y]].reset();
                orbiters[[x, 1]].reset();
                followers[[x, y]].reset();
            }
        }
    }


    for (let orbiterKey in orbiters) {
        orbiters[orbiterKey].next();
    }

    for (let followerKey in followers) {
        followers[followerKey].next();
    }
}
