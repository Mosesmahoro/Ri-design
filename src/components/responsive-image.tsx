import { useState } from "react";
import { ImageOff } from "lucide-react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export function ResponsiveImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}: ResponsiveImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
        style={{ width, height }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageOff size={24} />
          <span className="text-xs text-center">Image not found</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
