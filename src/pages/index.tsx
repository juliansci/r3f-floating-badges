import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Experience from "@/components/Experience/Experience";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Head>
        <title>Laetro Dynamic Graph Images</title>
        <meta name="description" content="Julian Scialabba Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center h-screen w-screen">
        <Leva collapsed />
        <Canvas camera={{ position: [0, 0, 100] }}>
          <Experience />
        </Canvas>
      </main>
    </>
  );
}
