import { useState, useEffect, useRef, useCallback, useContext } from "react";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from "./libs/model";
import { LoadingContext } from "../utils/LoadingContext";

function easeOutCircle(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Monster = (props) => {
    const refContainer = useRef()
    const [renderer,setRenderer] = useState()
    const {loading, setLoading} = useContext(LoadingContext)
    const [_camera,setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()
    
    useEffect(() => {
        const {current: container} = refContainer
        if(container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)
            
            const scale = scH * 0.005 + 20.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale +20,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)
            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)
            loadGLTFModel(scene, '/monster.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })
            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 100 ? frame + 1 : frame
                if(frame <= 100){
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                }else{
                    controls.update()
                }
                renderer.render(scene, camera)
            }
            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    },[])

    return (
        <div ref={refContainer} className='monster relative m-10 w-96 h-96 mx-auto'>
        </div>
    )
}

export default Monster
