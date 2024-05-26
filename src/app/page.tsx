import { GridLayout } from "@/components/GridLayout";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-20 px-5">
      <h1 className="text-4xl font-bold mb-3">Welcome to my Blog</h1>
      <p className="max-w-3xl mx-auto text-muted-foreground italic">
        Laudantium accusamus eligendi nam, vero velit error architecto rem
        magnam.
      </p>
      <GridLayout></GridLayout>
      <p className="max-w-5xl mx-auto leading-8 mb-5 md:mb-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores!
        Eius ut cum assumenda? Laudantium accusamus eligendi nam, vero velit
        error architecto rem magnam saepe cupiditate quas quos, temporibus
        excepturi. vero velit error architecto rem magnam saepe cupiditate quas
        quos, temporibus excepturi. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ea, maiores! Eius ut cum assumenda? Laudantium
        accusamus eligendi nam, vero velit error architecto rem magnam saepe
        cupiditate quas quos, temporibus excepturi. vero velit error architecto
        rem magnam saepe cupiditate quas quos, temporibus excepturi.
      </p>
    </main>
  );
}
