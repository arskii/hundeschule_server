import path from 'path'
import type { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
	slug: 'media',
	labels: {
		singular: {
			de: 'Media',
			ru: 'Изображение',
		},
		plural: {
			de: 'Media',
			ru: 'Изображения',
		},
	},
	access: {
		read: () => true,
	},
	upload: {
		staticURL: '/media',

		staticDir: path.resolve(__dirname, '../../media'),
		// Specify the size name that you'd like to use as admin thumbnail
		adminThumbnail: 'thumbnail',
		imageSizes: [
			{
				height: 340,
				width: 512,
				crop: 'center',
				name: 'thumbnail',
			},
		],
		mimeTypes: ['image/*'],
	},
	fields: [],
}

export default Media
