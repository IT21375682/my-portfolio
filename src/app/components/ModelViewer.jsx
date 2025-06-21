'use client';
import React, { useEffect } from 'react';
import '@google/model-viewer';

const ModelViewer = () => {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
  src="/models/tour_ia.glb"
  alt="3D Model"
  auto-rotate
  autoplay
  camera-controls
  style={{
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    display: 'block',
    backgroundColor: 'transparent',
  }}
/>
  );
};

export default ModelViewer;
