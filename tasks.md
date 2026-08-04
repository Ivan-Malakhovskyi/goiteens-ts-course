```ts
// Завдання 1
// Типізуйте параметри та повертаюче значення функції
const add = (a, b) => {
  return a + b;
};

// Завдання 2
// Типізуйте параметр і поверніть тип результату
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Завдання 3
// Типізуйте масив та функцію, що з ним працює
let prices = [120, 350, 89, 500, 15];

const getTotal = (items) => items.reduce((sum, item) => sum + item, 0);

// Завдання 4
// Типізуйте об'єкт (створіть type або interface)
let user = {
  name: "Олена",
  age: 28,
  email: "olena@example.com",
  isActive: true,
};

// Завдання 5
// Типізуйте функцію, яка приймає такий об'єкт як параметр
function printUser(user) {
  console.log(`${user.name}, ${user.age} років`);
}

// Завдання 6
// Тут другий параметр не завжди передається — врахуйте це в типізації
const createMessage = (text, sender) => {
  if (sender) {
    return `${sender}: ${text}`;
  }
  return `Анонім: ${text}`;
};

// Завдання 7
// Параметр може бути або рядком, або числом — типізуйте відповідно
function formatId(id) {
  if (typeof id === "number") {
    return `ID-${id}`;
  }
  return id.toUpperCase();
}

// Завдання 8
// Типізуйте масив об'єктів однакової форми
let products = [
  { title: "Ноутбук", price: 25000, inStock: true },
  { title: "Мишка", price: 300, inStock: false },
  { title: "Клавіатура", price: 800, inStock: true },
];

function getAvailableProducts(products) {
  return products.filter((p) => p.inStock);
}

// Завдання 9
// Значення status може приймати лише конкретний набір рядків — типізуйте через union
const updateStatus = (status) => {
  console.log("Новий статус: " + status);
};
updateStatus("active");
updateStatus("blocked");
updateStatus("pending");

// Завдання 10
// Ця функція завжди кидає помилку і ніколи нормально не завершується —
// типізуйте повертаюче значення відповідним "особливим" типом
function throwValidationError(message) {
  throw new Error(message);
}
```
