'use client'

import { FormEvent, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import Loading from '@/app/loading'
import type { Database } from '@/app/lib/database.types'

// ログアウトページ
const Logout = () => {
    const router = useRouter();
    const supabase = createClientComponentClient<Database>()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            // ログアウト
            const { error } = await supabase.auth.signOut()

            // エラーチェック
            if (error) {
                setMessage('エラーが発生しました。' + error.message)
                return
            }
            // トップページに遷移
            router.push('/')

        } catch (error) {
            setMessage('エラーが発生しました。' + error)
            return
        } finally {
            setLoading(false)
            router.refresh()
        }

    }

    return (
        <div className='max-w-[400px] mx-auto'>
            <div className='text-center font-bold text-xl mb-10'>
                ログアウトしますか？
            </div>
            <form onSubmit={onSubmit}>
                {/* ログアウトボタン */}
                <div className='mb-5'>
                    {loading ? (
                        <Loading />
                    ) : (
                        <button
                            type='submit'
                            className='font-bold bg-sky-500 hover:brightness-95 w-full p-2 text-white text-sm'>
                            ログアウト
                        </button>
                    )}
                </div>
            </form>
            {message && <div className='my-5 text-center text-sm text-red-500'>{message}</div>}

        </div>
    )

}

export default Logout