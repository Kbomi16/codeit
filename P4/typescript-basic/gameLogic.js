"use strict";
const current = [0, 0];
const target = [4, 5];
const dx = target[0] - current[0];
const dy = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
const items = [];
items.push('갑옷');
items.push('빨간 물약');
console.log(`${items.join(', ')}을/를 획득했다!`);