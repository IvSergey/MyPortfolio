// базовый модуль node.js  универсальный путь для разных платформ
const path = require ('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
            chunks: ['index','common'],
            // Путь до шаблона
            template: PATHS.src + '/pages/index/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about','common'],
            template: PATHS.src + '/pages/about/about.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'works.html',
            chunks: ['works','common'],
            template: PATHS.src + '/pages/works/works.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog','common'],
            template: PATHS.src + '/pages/blog/blog.pug'
        }),
        // Для очистки папки build
        new CleanWebpackPlugin('build'),
        // Подключение отельных css файлов (когда не работает срабатывает fallback)
        new ExtractTextWebpackPlugin({
            filename: "css/[name].css"
        }),
        // автоматически выносит код из разных js и css файлов
        new webpack.optimize.CommonsChunkPlugin({
        	name: 'common'
        }),
        // Минимизация css
        new OptimizeCssAssetsPlugin({
        	//Удаляет все комментарии из CSS кода
            cssProcessorOptions: { discardComments: {removeAll: true } }
        }),
        // анализирует исходники и автоматически подключает нужные модули на основании используемых литералов
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
        new UglifyJSPlugin()  // минификация js 
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
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                	publicPath: '../', // для того, чтобы пути к фоновым картинкам в css файле были правильными после сборки
                	fallback: 'style-loader',
                  	use: ['css-loader', 'sass-loader']
              	})
            },

          	{
           		test: /\.css$/,
            	use: ExtractTextWebpackPlugin.extract({
              		fallback: 'style-loader',
              		use: ['css-loader']
            	})
          	},

          	{
          		test: /\.(jpg|png|svg)$,
          		loader: 'file-loader',
          		options: {
          			name: 'img/[name].[ext]'
          		},
          	},

          	{
          		// Добавление префикса
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true
                }            
            },
        ],
    };
};