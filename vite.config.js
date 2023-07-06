import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'character-creation.html'),
            }
        }
    }
}