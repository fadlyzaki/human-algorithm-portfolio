import React from 'react';

/**
 * A wrapper for React.lazy that handles "Failed to fetch dynamically imported module" errors.
 * This error often occurs when a new version of the site is deployed, 
 * but the user still has an older version of the index.js which points 
 * to non-existent chunks from the previous build.
 */
export const lazyWithRetry = (componentImport) =>
  React.lazy(async () => {
    const pageHasBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem('page-has-been-force-refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      
      // Reset the flag if successful
      window.sessionStorage.setItem('page-has-been-force-refreshed', 'false');
      
      return component;
    } catch (error) {
      // Check if the error is a dynamic import failure
      const isDynamicImportError = 
        error.message?.includes('Failed to fetch dynamically imported module') ||
        error.name === 'ReferenceError'; // Some browsers might throw ReferenceError for missing chunks

      if (!pageHasBeenForceRefreshed && isDynamicImportError) {
        // Set flag to avoid infinite refresh loops
        window.sessionStorage.setItem('page-has-been-force-refreshed', 'true');
        
        // Reload the page to fetch the latest assets from the server
        window.location.reload();
      }

      // If already refreshed or not a dynamic import error, throw it so ErrorBoundary can catch it
      throw error;
    }
  });

export default lazyWithRetry;
