/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const TotalSpendByCategory = {};

  transactions.forEach(transaction =>{
    const {category, price} = transaction;

    if(!TotalSpendByCategory[category]){
      TotalSpendByCategory[category] = price
    }
    else{
      TotalSpendByCategory[category] += price
    }
  })

  const result = Object.keys(TotalSpendByCategory).map(category => ({
    category,
    totalSpent: TotalSpendByCategory[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
