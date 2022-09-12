{
  //function
  function volTabung(r, t) {
    return 3.14 * r ** 2 * t;
  }
  console.log(`Volume Tabung : ${volTabung(10, 4)}`);
}

{
  // anonymous function
  const volTabung = function (r, t) {
    return 3.14 * r ** 2 * t;
  };
  console.log(`Volume Tabung : ${volTabung(10, 4)}`);
}

{
  // arrow function
  const volTabung = (r, t) => 3.14 * r ** 2 * t;

  console.log(`Volume Tabung : ${volTabung(10, 4)}`);
}

{
  //higher order function
  const strArray = ["JavaScript", "Java", "C"];
  function forEach(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(callback(array[i]));
    }
    return newArray;
  }

  const lenArray = forEach(strArray, (item) => {
    return item.length;
  });
  console.log(lenArray);
}
