import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center h-full">
      <Image
        src={`${getImagePrefix()}images/logo/es-undc.png`}
        alt="logo"
        width={120}
        height={40}
        className="h-12 w-auto" // puedes ajustar h-10 según la altura del navbar
        quality={100}
        priority
      />
    </Link>
  );
};

export default Logo;