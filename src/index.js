module.exports = function zeros(expression) {
  // your solution

  let arr = expression.split("*"),
    arr_fact = [],
    arr_double_fact = [],
    arr_two = [],
    arr_five = [],
    result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/(\d+)(!+)/)[2].length == 1) {
      arr_fact.push(arr[i].match(/(\d+)(!+)/)[1]);
    }
    if (arr[i].match(/(\d+)(!+)/)[2].length == 2) {
      arr_double_fact.push(arr[i].match(/(\d+)(!+)/)[1]);
    }
  }

  for (let i = 0; i < arr_fact.length; i++) {
    zeros_fact(arr_fact[i]);
  }

  for (let i = 0; i < arr_double_fact.length; i++) {
    zeros_double_fact(arr_double_fact[i]);
  }

  if (arr_five.length < arr_two.length) {
    result += arr_five.length;
  }

  if (arr_two.length < arr_five.length) {
    result += arr_two.length;
  }

  function zeros_fact(fact) {
    let another_arr = [],
      number = fact;

    for (let i = 1; number > 0;) {
      another_arr.push(+number);
      number -= i;
    }

    for (let i = 0; i < another_arr.length; i++) {
      let num = another_arr[i];
      if (num % 2 == 0) {
        while (num > 1) {
          if (num % 2 == 0) {
            arr_two.push(2);
            num = num / 2;
          } else {
            break;
          }
        }
      }
      if (num % 5 == 0) {
        while (num > 1) {
          if (num % 5 == 0) {
            arr_five.push(5);
            num = num / 5;
          } else {
            break;
          }
        }
      }

    }
  }

  function zeros_double_fact(double_fact) {
    let another_arr = [],
      number = double_fact;

    for (let i = 2; number > 0;) {
      another_arr.push(+number);
      number -= i;
    }

    for (let i = 0; i < another_arr.length; i++) {
      let num = another_arr[i];
      if (num % 2 == 0) {
        while (num > 1) {
          if (num % 2 == 0) {
            arr_two.push(2);
            num = num / 2;
          } else {
            break;
          }
        }
      }
      if (num % 5 == 0) {
        while (num > 1) {
          if (num % 5 == 0) {
            arr_five.push(5);
            num = num / 5;
          } else {
            break;
          }
        }
      }

    }

  }
  console.log(result);
  return result;
}