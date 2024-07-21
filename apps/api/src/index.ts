import { ability } from '@newton-saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeletSomeoneElse = ability.can('delete', 'User')

console.log(userCanDeletSomeoneElse)
