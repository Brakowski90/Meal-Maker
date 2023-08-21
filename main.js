


const menu = {};


menu.courses = {};


menu.courses.appetizers = [];
menu.courses.mains = [];
menu.courses.desserts = [];


menu.addDishToCourse = function(courseName, dishName, dishPrice) {

  const dish = {
    name: dishName,
    price: dishPrice
  };
  this.courses[courseName].push(dish);
};


menu.getRandomDishFromCourse = function(courseName) {
  const dishes = this.courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
};


menu.generateRandomMeal = function() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  
  const totalPrice = appetizer.price + main.price + dessert.price;
  
  return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: ${totalPrice}`;
};


menu.addDishToCourse('appetizers', 'Salad', 7.99);
menu.addDishToCourse('appetizers', 'Soup', 5.49);
menu.addDishToCourse('appetizers', 'Cheese Bread', 6.99);

menu.addDishToCourse('mains', 'Steak', 19.99);
menu.addDishToCourse('mains', 'Sammy', 14.99);
menu.addDishToCourse('mains', 'Burger', 12.99);

menu.addDishToCourse('desserts', 'Cheesecake', 8.99);
menu.addDishToCourse('desserts', 'Ice Cream', 4.49);
menu.addDishToCourse('desserts', 'Chocolate Cake', 9.99);


const meal = menu.generateRandomMeal();
console.log(meal);


