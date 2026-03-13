"use client";

import { useRouter, useSearchParams } from "next/navigation";

const clusters = [
  "Todos",
  "Automatización con IA",
  "Diseño web y conversión",
  "Sistemas comerciales y CRM",
  "SEO local",
];

export function BlogFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("cluster") || "Todos";

  function handleClick(cluster: string) {
    if (cluster === "Todos") {
      router.push("/blog");
    } else {
      router.push(`/blog?cluster=${encodeURIComponent(cluster)}`);
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {clusters.map((c) => (
        <button
          key={c}
          onClick={() => handleClick(c)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === c
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
