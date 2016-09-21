import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';



export default {
	entry:'app/src/script/main.js',
	dest:'index.ios.js',
	format: 'iife',  //Rollup支持多种输出格式。因为我们是要在浏览器中使用，需要使用立即执行函数表达式(IIFE)
	sourceMap: 'inline',
	plugins: [

		/**
		 * import resolve from 'rollup-plugin-node-resolve';
		 * import commonjs from 'rollup-plugin-commonjs';
		 * 添加一组处理Node模块和CommonJS模块的插件
		 */
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs(),
		/**
		 * 
		 */


		/**
		 * import babel from 'rollup-plugin-babel';
		 * 
		 */ 
		babel({
			exclude: 'node_modules/**',
		}),
		/**
		 * import eslint from 'rollup-plugin-eslint';
		 * 代码检查
		 *
		 */
		eslint({
			exclude:[
				'rollupTest/src/style/**',
			],
		}),
		/**
		 * import replace from 'rollup-plugin-replace';
		 * NODE_ENV=production rollup -c
		 * 在main.js文件中可以使用变量 ENV （默认development，可在命令行中定义）
		 */
		replace({
	      exclude: 'node_modules/**',
	      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
	    }),
	    /**
	     * 压缩代码
	     * 只有在生产环境下才压缩代码
	     * (process.env.NODE_ENV === 'production' && uglify())
	     */
	    
		uglify(),
		/**
		 * css处理
		 *		 		 
		 */
		postcss({
	      plugins: [
	        // cssnext(),
	        // yourPostcssPlugin()
	      ],
	      extensions: ['.css', '.scss']  // default value
	      // parser: sugarss
	    })

	]
}
