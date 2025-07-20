class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
       return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(newIsCheckedOut) {
      this._isCheckedOut = newIsCheckedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !(this._isCheckedOut);
    }
  
    getAverageRating() {
      const initialValue = 0;
      const sum = this._ratings.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
      );
  
      const avg = sum / this._ratings.length;
      return avg;
    }
  
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book(
    'Bill Bryson',
    'A Short History of Nearly Everything',
    544
  )
  
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything);
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(4);
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie(
    'Jan de Bont',
    'Speed',
    116
  )
  
  console.log()
  console.log(speed);
  speed.toggleCheckOutStatus();
  console.log(speed);
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  