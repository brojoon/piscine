const month = {month : 1};
let day = 2;

const timeWarp = (newMonth, newDay) => {
  month.month = newMonth;
  day = newDay;
}

console.log(`month=${month.month}`, `day=${day}`);