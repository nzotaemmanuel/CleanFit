/* Spline 3D Scene Loader & Fallback Manager */

export function initSpline() {
  const container = document.getElementById('hero-canvas-container');
  if (!container) return;

  const fallback = container.querySelector('.spline-fallback');
  const spinner = container.querySelector('.spline-spinner');
  
  // Set fallback timeout (3.5 seconds)
  let loaded = false;
  const timeoutLimit = 3500; 

  const fallbackTimer = setTimeout(() => {
    if (!loaded) {
      console.warn("Spline 3D scene loading timed out. Showing CSS/SVG fallback.");
      showFallback();
    }
  }, timeoutLimit);

  // Dynamically load the spline viewer script to keep initial load lightweight
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://unpkg.com/@splinetool/viewer@1.9.0/build/spline-viewer.js';
  
  script.onload = () => {
    // Create spline-viewer element
    const viewer = document.createElement('spline-viewer');
    
    // Premium Interactive 3D Spline scene. 
    // We use a beautiful interactive bubbles/liquids clean theme that fits laundry
    viewer.setAttribute('url', 'https://prod.spline.design/kZi5iKuD2QpILoSp/scene.splinecode');
    viewer.style.width = '100%';
    viewer.style.height = '100%';
    viewer.style.display = 'block';

    // Append to container
    container.insertBefore(viewer, fallback);

    // Listen to load completion
    viewer.addEventListener('load', () => {
      loaded = true;
      clearTimeout(fallbackTimer);
      console.log("Spline 3D scene loaded successfully.");
      
      // Smoothly hide spinner and fallback
      if (spinner) spinner.style.display = 'none';
      if (fallback) {
        fallback.classList.add('hidden');
        setTimeout(() => {
          fallback.style.display = 'none';
        }, 500);
      }
    });
  };

  script.onerror = () => {
    loaded = true; // Prevents timer and forces fallback
    clearTimeout(fallbackTimer);
    console.error("Failed to load Spline script. Showing fallback.");
    showFallback();
  };

  document.head.appendChild(script);

  function showFallback() {
    if (spinner) spinner.style.display = 'none';
    // Fallback stays visible, remove potential loading styling
    if (fallback) {
      fallback.style.opacity = '1';
      fallback.classList.remove('hidden');
    }
    // Remove spline-viewer if appended but stalled
    const viewer = container.querySelector('spline-viewer');
    if (viewer) viewer.remove();
  }
}
