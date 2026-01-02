/*STATIC = Keyword that refuses properties or methods 
that belongs to a class itself rather than the objects
created from that (class owns anything static , not 
the objects) */
//========================================================================
//CODE 1.

class Mathutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(10));
console.log(Mathutil.getCircumference(10));
console.log(Mathutil.getArea(10));

//=========================================================================
//CODE 2.

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;

    }
}
const user1 = new User("Spongbob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");


console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

//=========================================================================







