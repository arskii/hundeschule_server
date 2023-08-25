import FormBuilder from '@payloadcms/plugin-form-builder'
import path from 'path'
import { buildConfig } from 'payload/config'
import Media from './collections/Media'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Header from './globals/Header'

export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
	admin: {
		user: Users.slug,
	},
	collections: [Posts, Tags, Users, Media],
	globals: [Header],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	cors: '*',
	rateLimit: {
		trustProxy: true,
	},
	plugins: [
		FormBuilder({
			fields: {
				payment: false,
			},
		}),
	],
	localization: {
		locales: ['de', 'ru'],
		defaultLocale: 'ru',
		fallback: true,
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
})
