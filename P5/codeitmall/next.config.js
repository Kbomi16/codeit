/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 객체를 배열로 리턴하는 함수
  async redirects() {
    return [
      {
        source: '/products/:id', // 리다이렉트 처리할 주소
        destination: '/items/:id', // 이동시킬 주소
        permanent: true, // 웹 브라우저에게 주소가 바꼈다는 사실을 저장하게 함
      },
    ]
  },
}

module.exports = nextConfig

