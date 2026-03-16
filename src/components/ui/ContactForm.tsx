'use client'

import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api'

export default function ContactForm() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          website: honeypot,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        const errors = data.errors
          ? Object.values(data.errors).flat().join(', ')
          : 'Gagal mengirim pesan.'
        setErrorMsg(errors as string)
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ nama: '', email: '', pesan: '' })
      setHoneypot('')
    } catch {
      setErrorMsg('Koneksi gagal. Coba lagi.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">

      {/* Honeypot — disembunyikan dari manusia, bot akan mengisi */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-500">Nama</label>
        <input
          type="text"
          placeholder="Nama lengkap kamu"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          required
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-primary-400 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-500">Email</label>
        <input
          type="email"
          placeholder="email@contoh.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-primary-400 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-gray-500">Pesan</label>
        <textarea
          rows={4}
          placeholder="Tulis pesanmu di sini..."
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          required
          className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-primary-400 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
          {errorMsg}
        </div>
      )}

      {status === 'success' && (
        <div className="text-xs text-primary-700 bg-primary-50 border border-primary-100 rounded-lg px-4 py-2.5">
          Pesan berhasil dikirim. Kami akan merespon secepatnya. Terimakasih.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2.5 bg-primary-600 text-primary-50 rounded-lg text-sm hover:bg-primary-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Mengirim...' : 'Kirim pesan'}
      </button>

    </form>
  )
}