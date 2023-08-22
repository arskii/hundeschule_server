import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
	slug: 'posts',
	labels: {
		singular: {
			de: 'Artikel',
			ru: 'Статья',
		},
		plural: {
			de: 'Artikel',
			ru: 'Статьи',
		},
	},
	admin: {
		defaultColumns: ['title', 'author', 'status'],
		useAsTitle: 'title',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			label: {
				ru: 'Название',
			},
			type: 'text',
			required: true,
		},
		{
			name: 'author',
			label: {
				ru: 'Автор',
			},
			type: 'relationship',
			relationTo: 'users',
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'publishedDate',
			label: {
				ru: 'Дата публикации',
			},
			type: 'date',
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'tags',
			label: {
				ru: 'Тэги',
			},
			type: 'relationship',
			relationTo: 'tags',
			hasMany: true,
		},
		{
			name: 'description',
			label: {
				ru: 'Короткое описание',
			},
			type: 'textarea',
			required: true,
		},
		{
			name: 'content',
			label: {
				ru: 'Текст статьи',
			},
			type: 'richText',
			required: true,
		},
		{
			name: 'image',
			label: {
				ru: 'Изображение',
			},
			type: 'upload',
			relationTo: 'media',
			required: true,
			hidden: false,
		},
		{
			name: 'status',
			label: {
				ru: 'Статус',
			},
			type: 'select',
			options: [
				{
					value: 'draft',
					label: { de: 'Draft', ru: 'Черновик' },
				},
				{
					value: 'published',
					label: { de: 'Published', ru: 'Опубликовано' },
				},
			],
			defaultValue: 'draft',
			admin: {
				position: 'sidebar',
			},
		},
	],
}

export default Posts
