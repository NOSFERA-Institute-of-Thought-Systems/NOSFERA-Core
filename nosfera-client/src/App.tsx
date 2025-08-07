import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Center } from '@react-three/drei';
import { useLibCognito } from './hooks/useLibCognito';

function App() {
  const { module, isLoaded } = useLibCognito();

  const displayText = isLoaded && module 
    ? module.get_version() 
    : 'Initializing NŌSFERA Core...';

  return (
    // ADD THE 'camera' PROP TO THIS LINE
    <Canvas style={{ background: '#101010' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Center>
        <Text
          color="white"
          anchorX="center"
          anchorY="middle"
          fontSize={0.5}
        >
          {displayText}
        </Text>
      </Center>
      <OrbitControls />
    </Canvas>
  );
}

export default App;