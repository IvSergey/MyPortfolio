// базовый модуль node.js  универсальный путь для разных платформ
const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

const PATHS = {
	// Исходники
    src: path.join(__dirname, 'src'),
    // Результат работы
    build: path.join(__dirname, 'build')
};
// Экспорт модулей js
module.exports = {
	// точка входа приложения
    entry: {
        'index': PATHS.src + '/pages/index/index.js',
        'about': PATHS.src + '/pages/about/about.js',
        'works': PATHS.src + '/pages/works/works.js',
        'blog': PATHS.src + '/pages/blog/blog.js'
    },
    // Имена файлов и дирректория результата работы
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },

    plugins: [
    	// Создание html файлов
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // Путь до шаблона
            template: PATHS.src + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: PATHS.src + '/pages/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'works.html',
            template: PATHS.src + '/pages/works/works.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            template: PATHS.src + '/pages/blog/blog.pug'
        }),
    ],
    module: {
        rules: [
            {
            	test: /\.pug$/, // регулярное выражение для работы с всеми файлами .pug
            	loader: 'pug-loader', // Для распознования webpack файлов .pug
            	options: {
            		pretty: true // Расстановка отступов
            	}
            },

            {
            	test:/\.scss$/,
            	include: paths,
            	use: [
            		// Выполнение работы снизу вверх
            		'style-loader', // добавление стилей в DOM дерево
            		'css-loader', // загрузка в граф
            		'sass-loader' // компиляция scss в css

            	]
            }
        ]
    }
};