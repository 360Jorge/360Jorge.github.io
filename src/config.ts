// src/config.ts
import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://360jorge.github.io', // Updated domain for GitHub Pages
    title: 'Invariant', // Site title 
    author: 'Jorge Guzman', // Author name
    description: 'A space to explore math, proofs, and problem-solving.', // Clearer tagline
    language: 'en-US'
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '35rem',
    centeredLayout: true,
    themeToggle: true,
    postListDottedDivider: false,
    footer: true,
    fadeAnimation: true
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD',
    dateSeparator: '.',
    dateOnRight: true
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false,
    toc: true,
    imageViewer: true,
    copyCode: true,
    linkCard: true
  }
}
