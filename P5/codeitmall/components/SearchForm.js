import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SearchForm() {
  const router = useRouter()
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      router.push('/')
      return
    }
    router.push(`/search?q=${value}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="q" value={value} onChange={handleChange} />
        <button>검색</button>
      </form>
    </div>
  )
}
