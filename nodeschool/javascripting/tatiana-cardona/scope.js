const a = 1;
let b = 2;
let c = 3;

(function firstFunction() {
  c = 6;

  (function secondFunction() {
    b = 8;

    (function thirdFunction() {
      const a = 7;

      (function fourthFunction() {
        const a = 1;
      })();
    })();
  })();
})();

console.log(`a: ${a}, b: ${b}, c: ${c}`);