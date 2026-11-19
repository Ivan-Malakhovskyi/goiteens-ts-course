/// <reference path="validator-strategies.ts"/>

namespace Validation {
  export class ValidatorSelector {
    private static validators: { [id: string]: Validation.ValidatorStrategy } =
      {};

    static initialize() {
      ValidatorSelector.validators["required"] = new RequiresValidator();
      ValidatorSelector.validators["number"] = new NumberValidator();
      ValidatorSelector.validators["email"] = new EmailValidator();
      ValidatorSelector.initialize = () => {};
    }

    static select(name: string): ValidationStrategy {
      const validator: ValidationStrategy = ValidatorSelector.validators[name];

      if (validator) {
        return validator;
      } else {
        throw new Error("Не знайдно валідатор ", name);
      }
    }
  }
}
