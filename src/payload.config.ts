import FormBuilder from '@payloadcms/plugin-form-builder'
import path from 'path'
import { buildConfig } from 'payload/config'
import Media from './collections/Media'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Header from './globals/Header'
import Navigation from './globals/Navigation'

export default buildConfig({
	serverURL: 'http://localhost:3000',
	admin: {
		user: Users.slug,
	},
	collections: [Posts, Tags, Users, Media],
	globals: [Header, Navigation],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	cors: ['http://localhost:3000'],
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
