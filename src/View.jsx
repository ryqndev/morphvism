import React, {useEffect, useState, useRef} from 'react';
import * as THREE from 'three';
// import OBJLoader from 'three-obj-loader';
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import './View.scss';
import {withRouter} from 'react-router-dom';


//https://hidden-eyrie-79468.herokuapp.com/tree_hacks

const View = ({history}) => {
    const [url, setUrl] = useState("");
    const mount = useRef(null)
    const [isAnimating, setAnimating] = useState(true);
    
    useEffect(() => {
        let width = mount.current.clientWidth;
        let height = mount.current.clientHeight;
        let frameId;
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        const controls = new OrbitControls(camera, renderer.domElement)
        camera.position.z = 4;
        renderer.setClearColor('#000000');
        let light = new THREE.AmbientLight( 0xffffff, 1.2);
        scene.add( light );
        renderer.setSize(width, height);
        let objLoader = new OBJLoader();
        objLoader.load(
            'https://hidden-eyrie-79468.herokuapp.com/output2gi.obj',
            object => {
                object.traverse( function ( child ) {
                    if( child instanceof THREE.Mesh ) {
                        child.material.color.setHex(0xffffff);
                    }
                });
                object.position.y = 0;
                object.position.x = 0;
                scene.add(object); 
            },
            xhr => {
                console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            // called when loading has errors
            error => {
                console.log("An error happened" + error);
            }
        );
    
        const renderScene = () => {
            renderer.render(scene, camera);
        }
    
        const handleResize = () => {
            width = mount.current.clientWidth;
            height = mount.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderScene();
        }
        
        const animate = () => {
            renderScene();
            frameId = window.requestAnimationFrame(animate)
        }
        const start = () => {
            if (!frameId) {
                frameId = requestAnimationFrame(animate)
            }
        }
    
        const stop = () => {
            cancelAnimationFrame(frameId);
            frameId = null;
        }
    
        mount.current.appendChild(renderer.domElement)
        window.addEventListener('resize', handleResize)
        start();
    
        controls.current = { start, stop }
        
        return () => {
            stop();
            window.removeEventListener('resize', handleResize);
            mount.current.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
        }
    }, []);
    
    useEffect(() => {
        if(history.entries[2] !== undefined){
            setUrl(history.entries[2].pathname.split('/')[2]);
            return;
        }
    }, [history])
    useEffect(() => {
        if(url === null){
            return;
        }
    }, [url]);

    return (
        <div className="view" ref={mount}/>
    );
}
export default withRouter(View);