import { defineAbilityFor } from '@newton-saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeletSomeoneElse = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeletSomeoneElse)
