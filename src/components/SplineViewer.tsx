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
          <div className="css-washing-machine">
            <div className="machine-top">
              <div className="machine-display">00:00</div>
              <div className="machine-dial"></div>
            </div>
            <div className="machine-drum">
              <div className="water-wave"></div>
              <div className="spinning-clothes"></div>
            </div>
          </div>
          <div className="spline-spinner" style={{ display: error ? 'none' : 'flex' }}>
            <div className="spinner-ring"></div>
            Loading 3D Experience...
          </div>
        </div>
      )}
    </div>
  );
}
