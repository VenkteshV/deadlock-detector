"A utility for deadlock and cycle detection.Use case: can be used in an orchestartor to detect cyclic calls to same api thatt is a deadlock scenario example: service A->ServiceB -> Service A.
A->B->A is a cycle

how to use :




const findCycles = require('deadlock-detector');




const services = {
    "A": ["A"],
    "L":["M","N"],
    "N":["L"],
    "B":["C","D"],
    "D":["E"],
    "E":["F","Q"],
    "F":["D"]
};


const cycles = findCycles(services);