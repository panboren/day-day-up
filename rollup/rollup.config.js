// rollup.config.js
export default {
    input: 'src/main.js',
    output: [
        {
        file: 'bundle2.js',
        format: 'iife'
        },
        {
            file: 'bundle.min.js',
            format: 'es',
        }
    ]
};
