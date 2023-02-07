/*Task 1:
● In this task we provide you with the start of a definition for a Shape class. It has three properties: name, sides, and side 
Length. This class only models shape for which all sides are the same length, like a square or an equilateral triangle.
● Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and 
initializes them.
● Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer 
edge) and logs the result to the console. 
● Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
● Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console 
as expected.
● Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
● Call triangle.calcPerimeter() to check that it works OK
class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
  
    calcPerimeter() {
      console.log(this.sides * this.sideLength);
    }
  }
  
  const square = new Shape("square", 4, 5);
  square.calcPerimeter(); // 20
  
  const triangle = new Shape("triangle", 3, 3);*/
 
  /*Task 2:
● Implement a class Player having PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth,PlayerShirtNumber.
● It should also have methods DisplayInfo(), GetRuns(), AddRuns() that prints the splayers info, total runs of the player 
and can add runs.
● You should also create a class variable that stores total runs of all the players and there should be a
● method that displays the class variable
class Player {
    static totalRuns = 0;

    constructor(id, name, dob, shirtNumber) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.shirtNumber = shirtNumber;
        this.runs = 0;
    }

    displayInfo() {
        console.log(`Player ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Date of Birth: ${this.dob}`);
        console.log(`Shirt Number: ${this.shirtNumber}`);
    }

    getRuns() {
        return this.runs;
    }

    addRuns(runs) {
        this.runs += runs;
        Player.totalRuns += runs;
    }

    static displayTotalRuns() {
        console.log(`Total runs of all players: ${this.totalRuns}`);
    }
}*/
/*Task 3:
● Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the 
following books
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

for (var i = 0; i < library.length; i++) {
    console.log("Book " + (i + 1) + ": " + library[i].title + " by " + library[i].author);
    console.log("Reading status: " + (library[i].readingStatus ? "Finished reading" : "Not yet read"));
    console.log("");
}*/
/*Task 4:
● Make a Bank Account class with attributes accountId , accountTitle, balance, emailID. Make each variable private. 
Initialize all the attributes and make them private. Make settes(mutators) and getters(accessors) for all the variables. Now 
make a method withdrawAmount(amount) and depositAmount(amount). Each will have a parameter of some amount. 
For withdrawAmount() display user the amount that has been withdrawn and remaining balance . Make sure that amount 
that is being withdrawn is not greater than the balance. For depositAmount() add the amount and show the current 
balance.
class BankAccount {
  constructor(accountId, accountTitle, balance, emailId) {
    this._accountId = accountId;
    this._accountTitle = accountTitle;
    this._balance = balance;
    this._emailId = emailId;
  }

  get accountId() {
    return this._accountId;
  }

  set accountId(value) {
    this._accountId = value;
  }

  get accountTitle() {
    return this._accountTitle;
  }

  set accountTitle(value) {
    this._accountTitle = value;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  get emailId() {
    return this._emailId;
  }

  set emailId(value) {
    this._emailId = value;
  }

  withdrawAmount(amount) {
    if (amount > this._balance) {
      console.log("Insufficient balance");
    } else {
      this._balance -= amount;
      console.log(`${amount} has been withdrawn. Remaining balance: ${this._balance}`);
    }
  }
*/