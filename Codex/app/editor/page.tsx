import dynamic from "next/dynamic";
const EditorComponent = dynamic(() => import("@/components/EditorComponent"), { ssr: false });
import React from "react";

export default function EditorPage() {
  return (
    <div className="dark:bg-slate-800 bg-slate-300 p-8">
      <EditorComponent />
    </div>
  );
}
