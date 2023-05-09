import foods from './foods.js';
class DataSource {
  static searchFood(keyword){
    return new Promise((resolve, reject) => {
      const filteredFoods = foods.filter(food => food.name.toUpperCase().includes(keyword.toUpperCase()));
  
      if (filteredFoods.length) {
        resolve(filteredFoods);
      } else {
        reject(`${keyword}  is not found`);
      }
    });
  }
}

export default DataSource;