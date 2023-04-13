import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import Badge from "../Badge/Badge";

function Experience() {
  const perfControls = useControls("Performance", {
    perfVisible: true,
  });
  const circle1Ref = useRef<any>();
  const circle2Ref = useRef<any>();
  const circle3Ref = useRef<any>();
  const circle4Ref = useRef<any>();
  const circle5Ref = useRef<any>();
  const circle6Ref = useRef<any>();
  const circle7Ref = useRef<any>();

  const transformControlsRef = useRef<any>();

  useEffect(() => {
    if (transformControlsRef.current) {
      console.log(transformControlsRef.current);
      transformControlsRef.current.gizmo.visible = false;
    }
  }, [transformControlsRef]);

  return (
    <>
      {perfControls.perfVisible ? <Perf position="top-left" /> : null}
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <OrbitControls
        makeDefault
        maxDistance={200}
        minDistance={50}
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={1}
        maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - 1}
      />
      <Badge
        position={[0, 0, 0]}
        imageUrl={"/images/image1.png"}
        ref={circle1Ref}
      />
      <Badge
        position={[19, 0, 0]}
        badgesConnected={[circle1Ref, circle2Ref, circle3Ref]}
        ref={circle2Ref}
        imageUrl={"/images/image2.png"}
      />
      <Badge
        position={[-22, 0, 0]}
        badgesConnected={[circle6Ref, circle7Ref]}
        ref={circle3Ref}
        imageUrl={"/images/image3.png"}
      />
      <Badge
        position={[22, 23, 0]}
        badgesConnected={[circle1Ref, circle4Ref]}
        ref={circle4Ref}
        imageUrl={"/images/image4.png"}
      />
      <Badge
        position={[-30, 25, 0]}
        badgesConnected={[circle1Ref, circle4Ref, circle7Ref]}
        ref={circle5Ref}
        imageUrl={"/images/image5.png"}
      />
      <Badge
        position={[35, -30, 0]}
        badgesConnected={[circle1Ref, circle2Ref]}
        ref={circle6Ref}
        imageUrl={"/images/image6.png"}
      />
      <Badge
        position={[-20, -20, 0]}
        badgesConnected={[circle1Ref, circle6Ref, circle5Ref]}
        ref={circle7Ref}
        imageUrl={"/images/image7.png"}
      />
    </>
  );
}

export default Experience;
