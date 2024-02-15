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

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'Vanilla', scoops: 5 }));