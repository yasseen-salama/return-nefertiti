"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../lib/model';
import { BodyModel, Container, LoaderContainer} from './styles';
import SyncLoader from "react-spinners/SyncLoader"; 

const Nefertiti: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  const easeOutCirc = (x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
  };

  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.08 + 4;
     // Changing to PerspectiveCamera
     const camera = new THREE.PerspectiveCamera(45, scW / scH, 0.01, 1000);
     camera.position.set(0, 7, 10); // Set the camera a bit far from the origin
     camera.lookAt(target);
     setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, '/nefertiti/scene.gltf', {
        receiveShadow: true,
        castShadow: true,
      })
        .then(obj => {
           // model's size and center
           const box = new THREE.Box3().setFromObject(obj);
           const size = box.getSize(new THREE.Vector3());
           const center = box.getCenter(new THREE.Vector3());
           
           const desiredSize = 13; // adjust scale value 
           const scaleFactor = desiredSize / Math.max(size.x, size.y, size.z);
           obj.scale.set(scaleFactor, scaleFactor, scaleFactor);
           
           obj.position.set(-center.x * scaleFactor , -center.y * scaleFactor + 1.2 , -center.z * scaleFactor);

           // ajdust camera's position
           const distance = desiredSize * 2; // adjust multiplyer value 
           const direction = new THREE.Vector3(0, 0, 1).multiplyScalar(distance);
           camera.position.copy(direction);
           animate();
           setLoading(false);
        })
        .catch(error => {
          console.error('Error loading GLTF model:', error); 
        });

      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 5;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      
      };

      return () => {
        console.log('unmount');
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Container>
        <BodyModel ref={refBody}></BodyModel>
        {loading ? 
        <LoaderContainer>
          <SyncLoader color="#ff0000" size={10} />
        </LoaderContainer> : null } 
    </Container>
  );
};

export default Nefertiti;