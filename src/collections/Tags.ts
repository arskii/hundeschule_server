import { CollectionConfig } from 'payload/types'

const Tags: CollectionConfig = {
	slug: 'tags',
	labels: {
		singular: {
			de: 'Tag',
			ru: 'Тэг',
		},
		plural: {
			de: 'Tags',
			ru: 'Тэги',
		},
	},
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
		},
	],
	timestamps: false,
}

export default Tags
