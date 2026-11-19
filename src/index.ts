namespace Sample1 {
  export class MyClass1 {
    public message() {
      console.log("Sample1.MyClass1.message");
    }
  }

  class MyClass2 {
    public message() {
      console.log("Sample1.MyClass1.message");
    }
  }
}

namespace Sample2 {
  export class MyClass1 {
    public message() {
      console.log("Sample2.MyClass1.message");
    }
  }

  class MyClass2 {
    public message() {
      console.log("Sample2.MyClass2.message");
    }
  }
}

const temp1 = new Sample1.MyClass1();
temp1.message();
const temp2 = new Sample2.MyClass1();
temp2.message();

namespace Shapes {
  export class Circle {
    constructor() {
      console.log("Circle");
    }
  }
  export class Square {
    constructor() {
      console.log("Square");
    }
  }

  export namespace Complex {
    export class Image {
      constructor() {
        console.log("Image");
      }
    }
    export class Animation {
      constructor() {
        console.log("Animation");
      }
    }
  }
}

// Створення псевдоніма  назвою Complex для простору імен Shapes.Complex

import complex = Shapes.Complex;

const img1 = new complex.Image();
const img2 = new Shapes.Complex.Image();
