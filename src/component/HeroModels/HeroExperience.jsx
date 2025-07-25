import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room';
import HeroLight from './HeroLight';
import Particles from '../Particles';


const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

            <HeroLight />
            <Particles count={100}/>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxdistance={20}
                mindistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>

        </Canvas>
    )
}

export default HeroExperience