'use client'

import dynamic from 'next/dynamic'

// wrapper
const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
  loading: () => (
    <header className="bg-blue-600 text-white p-4 shadow-md h-16">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    </header>
  )
})

export default function DynamicHeader() {
  return <Header />
}