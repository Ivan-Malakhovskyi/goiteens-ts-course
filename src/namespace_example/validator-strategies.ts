namespace Validation {
  export interface ValidationStrategy {
    validate(value: string): boolean;
    message: string;
  }

  export class RequiresValidator implements ValidationStrategy {
    validate(value: string): boolean {
      return value !== "";
    }
    message: string = "Поле обов'язково";
  }

  export class NumberValidator implements ValidationStrategy {
    validate(value: string): boolean {
      return /\d+/.test(value);
    }
    message: string = "Значення має бути числом";
  }

  export class EmailValidator implements ValidationStrategy {
    validate(value: string): boolean {
      return /^\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,3}$/i.test(value);
    }
    message: string = "Значення має бути email адресою";
  }
}
