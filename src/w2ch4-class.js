class CodersArray {
  constructor(...theArgs) {
    let myArray = {};
    this.myArray = myArray;
    for (let i in theArgs) {
      this.myArray[i] = theArgs[i];
    }
  }

  lengtH() {
    let counter = 0;
    for (let i in this.myArray) {
      counter++;
    }
    return counter;
  }

  some(value){
    let some 
    for (let i in this.myArray){
        if (i === value){
            some = true
        }
        else some = false
    }

    return some
  }

}

const numbers = new CodersArray(2, 6, 8);
