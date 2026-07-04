import React, { useEffect, useRef, useState } from 'react';

export default function SplineViewer({ url, className, style }: { url: string, className?: string, style?: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let fallbackTimer: any;
    if (url && containerRef.current) {
      fallbackTimer = setTimeout(() => {
        if (loading) {
          setError(true);
        }
      }, 10000);

      const viewer = document.createElement('spline-viewer');
      viewer.setAttribute('url', url);
      viewer.style.width = '100%';
      viewer.style.height = '100%';
      viewer.style.display = 'block';

      viewer.addEventListener('load', () => {
        setLoading(false);
        clearTimeout(fallbackTimer);
      });

      viewer.addEventListener('error', () => {
        setError(true);
        clearTimeout(fallbackTimer);
      });

      containerRef.current.appendChild(viewer);

      return () => {
        clearTimeout(fallbackTimer);
        if (containerRef.current && containerRef.current.contains(viewer)) {
          containerRef.current.removeChild(viewer);
        }
      };
    }
  }, [url]);

  return (
    <div className={`spline-container ${className || ''}`} style={style} ref={containerRef}>
      {(loading || error) && (
        <div className={`spline-fallback ${error ? 'visible' : ''}`}>
          <img src="/assets/images/placeholder.jpg" alt="CleanFit Laundry" />
          <div className="spline-spinner" style={{ display: error ? 'none' : 'block' }}></div>
        </div>
      )}
    </div>
  );
}
