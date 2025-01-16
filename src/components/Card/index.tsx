import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center flex-col justify-between p-6 rounded-md bg-white min-h-80 w-[600px] shadow-md">
      {children}
    </div>
  );
}
