import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="text-lg font-bold ">
        <Image src="/logo/Logo1.png" alt="Logo" width={270} height={250} />
      </Link>
    </div>
  );
}
