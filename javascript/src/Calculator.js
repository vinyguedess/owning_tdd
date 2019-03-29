export default {
  sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
  },

  subtract(...numbers) {
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      total -= numbers[i];
    }

    return total;
  }
};
