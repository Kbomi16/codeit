import SearchForm from '@/components/SearchForm'
import { useRouter } from 'next/router'
import React from 'react'

export default function search({ initialValue = '' }) {
  const router = useRouter()
  const { q } = router.query
  return (
    <div>
      search
      <SearchForm initialValue={initialValue} />
      <h2>{q} 검색결과</h2>
    </div>
  )
}
