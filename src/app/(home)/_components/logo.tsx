import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="text-lg font-bold">
        <Image src="/logo/Logo.svg" alt="Logo" width={40} height={40} />
      </Link>
    </div>
  );
}
