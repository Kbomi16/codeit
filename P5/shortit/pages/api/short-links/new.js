import Head from 'next/head'
import styles from '@/styles/QRCodeCreatePage.module.css'
import ShortLinkCreatePage from './../../short-links/new'
import ShortLinkForm from '@/components/ShortLinkForm'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function ShortLinkCreatePage() {
  async function handleSubmit(values) {
    const router = useRouter()
    axios.post('/short-links/', values)
  }

  return (
    <>
      <Head>
        <title>새 URL 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 URL 추가</h1>
        <ShortLinkForm onSubmit={handleSubmit} />
      </div>
    </>
  )
}
