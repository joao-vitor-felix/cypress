import { defineConfig } from 'cypress';
import reset from './prisma/reset.cjs';
import seed from './prisma/seed.cjs';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '**/*.cy.{js,ts}',
    setupNodeEvents(on) {
      on('task', {
        reset() {
          return reset();
        },
        seed() {
          return seed();
        },
      });
    },
  },
});
