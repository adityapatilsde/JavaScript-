let count = 5; // global variable

function changeCount() {
  count = 10; // modifying global variable
}

changeCount();
console.log(count); // 10
