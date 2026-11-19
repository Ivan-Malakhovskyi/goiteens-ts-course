/*
/// Triple slash reference - triple-slash
directives are only valid at the top of their containing file.
A triple-slash directive can only be preceded by single or multi-line comments, including other triple-slash directives. 
If they are encountered following a statement or a declaration they are treated as regular single-line comments, and hold no special meaning.

*/

/// <reference path="validator.ts"/>

namespace NamespaceFilesSample {
  const data1 = {
    firstName: "New",
    lastName: "User",
    age: 29,
    email: "fkfk@2gmail.com",
  };
  const data2 = {
    firstName: "New",
    lastName: "User",
    age: "",
    email: "fkfk@2gmail.com",
  };

  const config = {
    firstName: "required",
    lastName: "required",
    age: "number",
    email: "email",
  };

  export function run() {
    const validator = new Validation.Validator(config);
    let result: Validation.ValidationResult = validator.validate(data1);
    console.log("🚀 ~ run ~ result:", result.valid);
    console.log("🚀 ~ run ~ result:", result.errors);

    result = validator.validate(data2);
    console.log("🚀 ~ run ~ result:", result.valid);
    console.log("🚀 ~ run ~ result:", result.errors);
  }
}

NamespaceFilesSample.run();
