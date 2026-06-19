function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let largerValue = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        const profit = prices[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
            largerValue = prices[i];
        }
    }
    return [maxProfit, largerValue, minPrice];
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit:", profit);