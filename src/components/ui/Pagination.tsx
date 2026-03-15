'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  lastPage: number
  total: number
  perPage: number
}

export default function Pagination({ currentPage, lastPage, total, perPage }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  if (lastPage <= 1) return null

  function buildUrl(page: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    return `${pathname}?${params.toString()}`
  }

  // Buat array nomor halaman yang ditampilkan
  function getPages(): (number | '...')[] {
    const pages: (number | '...')[] = []
    if (lastPage <= 7) {
      for (let i = 1; i <= lastPage; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(lastPage - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < lastPage - 2) pages.push('...')
      pages.push(lastPage)
    }
    return pages
  }

  const from = (currentPage - 1) * perPage + 1
  const to = Math.min(currentPage * perPage, total)

  return (
    <div className="flex flex-col items-center gap-3 mt-10">
      <p className="text-xs text-gray-400">
        Menampilkan {from}–{to} dari {total} data
      </p>
      <div className="flex items-center gap-1">
        {/* Prev */}
        {currentPage > 1 ? (
          <Link
            href={buildUrl(currentPage - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors text-xs"
          >
            ‹
          </Link>
        ) : (
          <span className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-300 text-xs cursor-not-allowed">
            ‹
          </span>
        )}

        {/* Page numbers */}
        {getPages().map((page, i) =>
          page === '...' ? (
            <span key={`dot-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-300 text-xs">
              …
            </span>
          ) : (
            <Link
              key={page}
              href={buildUrl(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs transition-colors ${
                page === currentPage
                  ? 'bg-primary-600 text-primary-50 border border-primary-600'
                  : 'border border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {page}
            </Link>
          )
        )}

        {/* Next */}
        {currentPage < lastPage ? (
          <Link
            href={buildUrl(currentPage + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-colors text-xs"
          >
            ›
          </Link>
        ) : (
          <span className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-300 text-xs cursor-not-allowed">
            ›
          </span>
        )}
      </div>
    </div>
  )
}