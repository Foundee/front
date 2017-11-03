module.exports = {
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000'
	},
	plugins: [
		'~/plugins/i18n',
		'~/plugins/axios'
	],
	head: {
		title: 'foundee-front',
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'foundee-front'
			}
		],
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/favicon.ico'
			}
		]
	},
	loading: {
		color: '#3B8070'
	},
	build: {
		vendor: [
			'axios',
			'vue-i18n'
		],
		extend( config, ctx ) {
			if ( ctx.dev && ctx.isClient ) {
				config.module.rules.push( {
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				} );
			}
		}
	}
};
