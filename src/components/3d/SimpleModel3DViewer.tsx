
import { useState, useEffect, useRef } from 'react';

// Basic 3D viewer component that uses Three.js from CDN
const SimpleModel3DViewer = ({ modelPath, height = "300px", autoRotate = true }: { modelPath: string, height?: string, autoRotate?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || typeof window.THREE === 'undefined') return;

    let scene: any, camera: any, renderer: any, model: any, controls: any;
    let animationId: number;

    const container = containerRef.current;
    
    // Wait for THREE to be available from CDN
    const initInterval = setInterval(() => {
      if (typeof window.THREE !== 'undefined') {
        clearInterval(initInterval);
        init();
      }
    }, 100);

    function init() {
      try {
        // Initialize scene
        scene = new window.THREE.Scene();
        scene.background = new window.THREE.Color(0xf1f0fb); // Light background

        // Set up camera
        camera = new window.THREE.PerspectiveCamera(
          50, 
          container.clientWidth / container.clientHeight, 
          0.1, 
          1000
        );
        camera.position.z = 5;

        // Set up renderer
        renderer = new window.THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Add ambient light
        const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new window.THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Placeholder cube for testing (until real models are loaded)
        const geometry = new window.THREE.BoxGeometry(1, 1, 1);
        const material = new window.THREE.MeshStandardMaterial({ 
          color: 0x9b87f5,
          metalness: 0.3,
          roughness: 0.4,
        });
        model = new window.THREE.Mesh(geometry, material);
        scene.add(model);

        // Optional: Add OrbitControls if available
        if (window.THREE.OrbitControls) {
          controls = new window.THREE.OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.rotateSpeed = 0.7;
        }

        // Handle window resize
        const handleResize = () => {
          if (container) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
          }
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          // Auto-rotate the model if requested
          if (autoRotate && model && !controls) {
            model.rotation.y += 0.01;
          }
          
          // Update controls if available
          if (controls) {
            controls.update();
          }
          
          renderer.render(scene, camera);
        };

        animate();
        setIsLoaded(true);

      } catch (error) {
        console.error("Error initializing 3D viewer:", error);
        setIsError(true);
      }
    }

    // Cleanup
    return () => {
      clearInterval(initInterval);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', () => {});
      
      // Dispose resources
      if (model) {
        if (model.geometry) model.geometry.dispose();
        if (model.material) model.material.dispose();
        scene.remove(model);
      }
    };
  }, [modelPath, autoRotate]);

  return (
    <div className="relative w-full" style={{ height }}>
      <div 
        ref={containerRef} 
        className="w-full h-full rounded-lg overflow-hidden bg-devhub-soft-gray"
      />
      
      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-devhub-purple"></div>
        </div>
      )}
      
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          <p>Error loading 3D model</p>
        </div>
      )}
    </div>
  );
};

// Add window.THREE type for TypeScript
declare global {
  interface Window {
    THREE: any;
  }
}

export default SimpleModel3DViewer;
