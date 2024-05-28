import Image from 'next/image'

export default function Test() {
  return (
    <>
      {/* 레이지로딩: 이미지가 필요한 순간 다운로드함 */}
      {/* Image: 이미지 알아서 최적화함 */}
      <div
        style={{
          position: 'relative',
          width: '50%',
          height: '200px',
        }}
      >
        <Image
          src="/images/product.jpeg"
          fill
          alt="상품 이미지"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}
