import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Signup from '@/app/components/signup'
import type { Database } from '@/app/lib/database.types'

// サインアップページ
const SignupPage = async () => {
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

    return <Signup />

}

export default SignupPage