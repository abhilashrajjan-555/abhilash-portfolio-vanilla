/**
 * Image Fallback Script
 * Handles broken image links by replacing them with a fallback image.
 */

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('error', function () {
            // Prevent infinite loop if fallback also fails
            if (this.dataset.hasFailed) return;
            this.dataset.hasFailed = 'true';

            console.warn(`Image failed to load: ${this.src}`);

            // Check if a specific fallback is defined in data-fallback attribute
            if (this.dataset.fallback) {
                this.src = this.dataset.fallback;
            } else {
                // Default fallback: A simple SVG placeholder
                // Using a data URI for a gray rectangle with an icon
                this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+PGNpcmNsZSBjeD0iOC41IiBjeT0iOC41IiByPSIxLjUiPjwvY2lyY2xlPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDE2IDEwIDUgMjEiPjwvcG9seWxpbmU+PC9zdmc+';
                this.alt = 'Image not found';
            }
        });
    });
});

