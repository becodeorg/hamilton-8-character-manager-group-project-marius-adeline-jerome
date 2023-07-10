import { resolve } from 'path';
// The first line imports the "resolve" function from the built-in "path" module. The resolve function is used to resolve and normalize file paths.
export default {
    // export default { ... } is used to export the configuration object as the default export of the "vite.config.js" file.
    // This object contains the various configuration options for Vite.
    build: {
        // Within the configuration object, "build" represents the configuration options related to the build process.
        rollupOptions: {
            // "rollupOptions" is an option within "build" that allows you to provide specific configuration options for Rollup, the bundler used by Vite.
            input: {
                // "input" is a sub-option of "rollupOptions", and it specifies the entry point(s) for the Rollup bundling process.
                main: resolve(__dirname, 'singleCharacter.html'),
                // In this example, there is a single entry point defined with the name main. The resolve(__dirname, 'character-creation.html') 
                // code is used to resolve the path of the character-creation.html file relative to the current configuration file (vite.config.js). 
                // The __dirname variable represents the current directory path.


            }
        }
    }
}
