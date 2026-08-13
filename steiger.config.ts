import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    // disable the `public-api` rule for files in the Shared layer
    files: ['./src/pages/*'],
    rules: {
      'fsd/no-layer-public-api': 'off',
    },
  },
])