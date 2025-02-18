import { defineAbilityFor, projectSchema } from '@newton-saas/auth'

const ability = defineAbilityFor({
  role: 'MEMBER',
  id: 'user-id',
  __typename: 'User',
})

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))
