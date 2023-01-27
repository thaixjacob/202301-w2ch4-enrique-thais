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

  pusH(value) {
    let length = this.lengtH();
    this.myArray[length] = value;
    return this.myArray;
  }

  some(value) {
    for (let i of Object.values(this.myArray)) {
      if (i === value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    let findIt = 0;
    for (let i of Object.values(this.myArray)) {
      if (value < i) return i;
    }
  }

  maP(expression) {
    for (i = 0; i < this.lengtH() - 1; i++) {
      this.myArray[i] = this.myArray[i] * 2;
    }
    return this.myArray;
  }
}

const numbers = new CodersArray(2, 6, 8);
