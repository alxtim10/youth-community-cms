import Link from "next/link";

import {
  Inbox,
} from "lucide-react";

export default function EmptyState({
  title,
  description,
  buttonText,
  href,
}: {
  title: string;

  description: string;

  buttonText?: string;

  href?: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-12 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
        <Inbox
          size={36}
          className="text-slate-500"
        />
      </div>

      <h2 className="mt-6 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-slate-500 max-w-md">
        {description}
      </p>

      {buttonText && href && (
        <Link
          href={href}
          className="mt-8 px-6 py-3 rounded-2xl bg-slate-900 text-white hover:opacity-90 transition-all"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}