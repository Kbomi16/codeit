import { useRouter } from 'next/router'
import React from 'react'

export default function search() {
  const router = useRouter()
  const { q } = router.query
  return (
    <div>
      search
      <h2>{q} 검색결과</h2>
    </div>
  )
}
