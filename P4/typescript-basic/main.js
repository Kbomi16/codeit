"use strict";
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
const product1 = {
    id: 'c001',
    name: '코드잇 블랙 후드 집업',
    price: 129000,
    membersOnly: true,
    sizes: [Size.M, Size.L],
    salePrice: 0
};
const product2 = {
    id: 'd001',
    name: '코드잇 텀블러',
    price: 25000,
    sizes: [],
    salePrice: 0
};
const printProduct = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};
printProduct(product1);
printProduct(product2);
