/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const ans = {};
  for(let i = 0;i < transactions.length;i++)
  {
    const {category,price} = transactions[i];
    if(category in ans)
    {
      ans[category].totalSpent += price;
    }
    else{
      ans[category] = {
        category ,
        totalSpent : price
      };
    }
  }
  const result = Object.values(ans);
  return result;
}

module.exports = calculateTotalSpentByCategory;
