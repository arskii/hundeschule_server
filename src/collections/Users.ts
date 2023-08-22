import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
	slug: 'users',
	labels: {
		singular: {
			de: 'Benutzer',
			ru: 'Пользователь',
		},
		plural: {
			de: 'Benutzer',
			ru: 'Пользователи',
		},
	},
	auth: true,
	admin: {
		useAsTitle: 'email',
	},
	fields: [
		// Email added by default
		{
			name: 'name',
			type: 'text',
		},
	],
}

export default Users
