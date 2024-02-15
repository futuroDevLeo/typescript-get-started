interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

const myIceCream: IceCream = {
    flavor: 'Strawberry',
    scoops: 2,
}

console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream | Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'Vanilla', scoops: 5 }));

interface Sundae extends IceCream {
    sauce: 'cocholate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myNewIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));

interface IceCreamArray {
    [index: number]: string;
}

let myIceCreamArray: IceCreamArray;
myIceCreamArray = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCreamArray[0];
console.log(myStr);