// AND와 OR의 연산 방식
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


console.log(null && undefined); // null
console.log(0 || true); // true
console.log('0' && NaN); // NaN
console.log({} || 123); // {}


function print(value) {
    const message = value || 'Codeit';

    console.log(message);
}

print(); // 아무것도 전달하지 않으면 false -> Codeit
print('JavaScript'); // value를 전달함 -> JavaScript