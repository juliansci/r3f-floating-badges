import { QuadraticBezierLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MutableRefObject, useRef } from "react";
function Cable({
  start,
  end,
  v1 = new THREE.Vector3(),
  v2 = new THREE.Vector3(),
}: any) {
  const ref = useRef<any>(null);

  useFrame(() => {
    const position1 = start.current.getWorldPosition(v1);
    const position2 = end.current.getWorldPosition(v2);
    ref.current.setPoints(
      new THREE.Vector3(position1.x, position1.y, position1.z - 3),
      new THREE.Vector3(position2.x, position2.y, position2.z - 3)
    );
  });

  return (
    <QuadraticBezierLine
      ref={ref}
      lineWidth={3}
      color="#ff2060"
      start={[0, 0, 0]}
      end={[0, 0, 0]}
    />
  );
}

export default Cable;
