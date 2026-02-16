#!/usr/bin/env node
const path = require('path');
try {
  // Try to require husky and run install if available
  const husky = require('husky');
  if (husky && typeof husky.install === 'function') {
    husky.install();
    console.log('husky: installed (prepare step)');
  }
} catch (err) {
  // Husky not present in this environment (e.g., Vercel production). Skip.
  console.log('husky not available; skipping prepare step');
}
