enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface Product {
  id: string
  name: string
  price: number
  salePrice: number
  membersOnly?: boolean
}

interface ClothingProduct extends Product {
  sizes: Size[]
}

const product1: ClothingProduct = {
  id: 'c001',
  name: '코드잇 블랙 후드 집업',
  price: 129000,
  membersOnly: true,
  sizes: [Size.M, Size.L],
  salePrice: 0
}

const product2: ClothingProduct = {
  id: 'd001',
  name: '코드잇 텀블러',
  price: 25000,
  sizes: [],
  salePrice: 0
}

interface PrintProductFunction {
  (product: Product):void
}

const printProduct: PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
}

printProduct(product1)
printProduct(product2)
