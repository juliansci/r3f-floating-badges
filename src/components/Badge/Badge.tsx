/* eslint-disable react/display-name */
import { Float, TransformControls } from "@react-three/drei";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { forwardRef } from "react";
import Cable from "../Cable/Cable";
import { useControls } from "leva";

const Badge = forwardRef(
  ({ imageUrl, position, badgesConnected }: any, ref: any) => {
    const texture = useLoader(TextureLoader, imageUrl) as any;
    const badgesFloatingControls = useControls("Badges Floating", {
      floatIntensity: { value: 1, min: 0, max: 10 },
      rotationIntensity: { value: 0.5, min: 0, max: 10 },
      floatingRangeMinY: { value: -1, min: -10, max: 0 },
      floatingRangeMaxY: { value: 1, min: 0, max: 10 },
    });
    return (
      <>
        <Float
          floatIntensity={badgesFloatingControls.floatIntensity}
          floatingRange={[
            badgesFloatingControls.floatingRangeMinY,
            badgesFloatingControls.floatingRangeMaxY,
          ]}
          rotationIntensity={badgesFloatingControls.rotationIntensity}
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
