"use client";
import Card from "@/components/Card";
import Play from "@/components/Play";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <Play />
      </Card>
    </div>
  );
}
