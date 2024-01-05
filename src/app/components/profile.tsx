'useClient'

import { useCallback, useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Loading from '@/app/loading'
import * as z from 'zod'
import type { Database } from '@/app/lib/database.types'
import useStore from '../../../store'
type Schema = z.infer<typeof schema>