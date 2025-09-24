"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  
  return (
    <div className="flex items-center">
      <Link href="/" className="text-lg font-bold ">
        {mounted && (
          resolvedTheme === "light" ? (
            <Image src="/logo/logo-light.png" alt="Logo" width={270} height={200} />
          ) : (
            <Image src="/logo/logo-dark.png" alt="Logo" width={270} height={200} />
          )
        )}
      </Link>
    </div>
  );
}