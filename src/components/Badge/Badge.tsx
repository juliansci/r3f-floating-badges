/* eslint-disable react/display-name */
import { Float, TransformControls } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import Cable from "../Cable/Cable";

const Badge = forwardRef(
  ({ imageUrl, position, badgesConnected }: any, ref: any) => {
    const texture = useLoader(TextureLoader, imageUrl) as any;

    return (
      <>
        <Float
          floatIntensity={1}
          floatingRange={[-2, 2]}
          rotationIntensity={0.5}
        >
          <mesh ref={ref} position={position}>
            <circleGeometry args={[5, 32]} />
            <meshBasicMaterial
              side={DoubleSide}
              map={texture}
              toneMapped={false}
            />
          </mesh>
        </Float>
        {badgesConnected && badgesConnected.length
          ? badgesConnected.map((badgeConnected: any) => {
              console.log(badgeConnected);

              return (
                <Cable
                  key={badgeConnected.id}
                  start={ref}
                  end={badgeConnected}
                />
              );
            })
          : null}
      </>
    );
  }
);

export default Badge;
