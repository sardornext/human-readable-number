module.exports = function toReadable(number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 10) {
      return units[number];
  } else if (number > 10 && number < 20) {
      return teens[number - 11];
  } else if (number >= 10 && number < 100) {
      const ten = Math.floor(number / 10);
      const unit = number % 10;
      return unit === 0 ? tens[ten - 1] : `${tens[ten - 1]} ${units[unit]}`;
  } else if (number >= 100 && number < 1000) {
      const hundred = Math.floor(number / 100);
      const remainder = number % 100;
      if (remainder === 0) {
          return `${units[hundred]} hundred`;
      } else {
          return `${units[hundred]} hundred ${toReadable(remainder)}`;
      }
  }
};