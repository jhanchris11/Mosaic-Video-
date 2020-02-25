require('@babel/polyfill')
require('@babel/register')({
    extends:'./.babelrc',
    ignore:[/node_modules/]
})

require('./principal')