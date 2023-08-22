import { GlobalConfig } from 'payload/types'

const Navigation: GlobalConfig = {
	slug: 'navigation',
	label: {
		de: 'Navigation',
		ru: 'Навигация',
	},
	fields: [
		{
			name: 'menuItems',
			type: 'array',
			required: true,
			maxRows: 6,
			fields: [
				{
					name: 'page',
					type: 'text',
					required: true,
					unique: true,
				},
			],
		},
	],
}
export default Navigation
