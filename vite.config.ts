import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
    plugins: [react()],
    base: "/campers",
    resolve: {
        alias: {
            '~': root,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import 'src/assets/scss/common/reset.scss';
          @import 'src/assets/scss/common/colors.scss';
          @import 'src/assets/scss/common/base.scss';
          @import 'src/assets/scss/common/button.scss';
          @import 'src/assets/scss/common/text.scss';
        `,
            },
        },
    },
});