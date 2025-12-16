import FlutterSvg from "@/public/icons/flutter.svg";
import NestSvg from "@/public/icons/nest.svg";
import NextSvg from "@/public/icons/next.svg";
import Image from "next/image";
export function TechStack() {
  return (
    <div className="pt-8 flex flex-col items-center md:items-start gap-3 opacity-80 hover:opacity-100 transition-opacity">
      <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
        Tech Stack Principal
      </span>
      <div className="flex items-center gap-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
        <div
          className="group flex flex-col items-center gap-1 cursor-pointer"
          title="Next.js"
        >
          <Image className="size-8" src={NextSvg} alt="Next.js-Icon" />
        </div>

        <div
          className="group flex flex-col items-center gap-1 cursor-pointer"
          title="NestJS"
        >
          <Image className="size-8" src={NestSvg} alt="NestJS-Icon" />
        </div>

        {/* Flutter */}
        <div
          className="group flex flex-col items-center gap-1 cursor-pointer"
          title="Flutter"
        >
          <Image className="size-8" src={FlutterSvg} alt="Flutter-Icon" />
        </div>
      </div>
    </div>
  );
}
