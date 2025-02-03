import { defineAbilityFor } from '@newton-saas/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getMembership } from '@/http/get-membership'
import { getProfile } from '@/http/get-profile'

import { AUTH_TOKEN_KEY } from './constants'

export async function isAuthenticated() {
  const nextjsCookies = await cookies()
  return !!nextjsCookies.get(AUTH_TOKEN_KEY)?.value
}

export async function getCurrentOrg() {
  const nextjsCookies = await cookies()
  return nextjsCookies.get('org')?.value ?? null
}

export async function getCurrentMembership() {
  const org = await getCurrentOrg()

  if (!org) {
    return null
  }

  const { membership } = await getMembership(org)

  return membership
}

export async function ability() {
  const membership = await getCurrentMembership()

  if (!membership) {
    return null
  }

  const ability = defineAbilityFor({
    id: membership.userId,
    role: membership.role,
  })

  return ability
}

export async function auth() {
  const nextjsCookies = await cookies()
  const token = nextjsCookies.get(AUTH_TOKEN_KEY)?.value

  if (!token) {
    redirect('/auth/sign-in')
  }
  try {
    const { user } = await getProfile()
    return { user }
  } catch {}

  redirect('/api/auth/sign-out')
}
