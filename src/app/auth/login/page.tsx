import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Login from '@/app/components/login'
import type { Database } from '@/app/lib/database.types'

const LoginPage = async () => {
    const supabase = createServerComponentClient<Database>({
        cookies,
    })

    // セッションの取得
    const {
        data: { session },
    } = await supabase.auth.getSession()

    // 認証している場合、リダイレクト
    if(session) {
        redirect('/')
    }

    return <Login />

}

export default LoginPage