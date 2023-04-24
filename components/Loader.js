import Image from "next/image";
import { IMAGE_URL } from "../constants/url";

const Loader = () => {
  return (
    <div className="fixed z-50 bg-black/30 w-full h-full top-0 flex items-center justify-center">
      <Image
        src={`${IMAGE_URL}/gifs/Final_Dino_GIF.gif`}
        alt="Loading..."
        width={300}
        height={300}
      />
    </div>
  );
};

export default Loader;
