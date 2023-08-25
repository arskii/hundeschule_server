import { GlobalConfig } from 'payload/types'

const Header: GlobalConfig = {
	slug: 'header',
	label: {
		de: 'Header',
		ru: 'Заголовок',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'link',
			label: {
				de: 'link',
				ru: 'ссылка в шапке',
			},
			type: 'text',
			required: true,
		},
	],
}
export default Header
