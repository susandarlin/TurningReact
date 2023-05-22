type color = 'red' | 'green' | 'blue'; // union -> combine types
let data : color = 'red';
data = 'green';
// data = 'something';

type Circle = {
    typeName : string,
    radius : number,
};
type Rectangle = {
    typeName : string,
    width : number,
    height : number,
};
type Shape = Circle | Rectangle; // lgebraic data types(ADT)

type Nameable = {
    name : string,
};
type Ageable = {
    age : number
};
type Dog = Nameable & Ageable;
let dog : Dog = {
    name : 'Some',
    age : 3,
}