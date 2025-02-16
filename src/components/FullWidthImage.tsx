import Image from "next/image";
import { ComponentProps, FC } from "react";

import { cn } from "@/lib/utils";

const FullWidthImage: FC<ComponentProps<typeof Image>> = ({
  className,
  src,
  alt,
  ...props
}) => {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        {...props}
      />
    </section>
  );
};

export default FullWidthImage;
