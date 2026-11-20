import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, onDone }) {
  useEffect(() => {
    if (!message) return undefined;
    const timer = setTimeout(onDone, 2600);
    return () => clearTimeout(timer);
  }, [message, onDone]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed bottom-24 left-1/2 z-[70] flex max-w-[92vw] -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#DB2777] px-4 py-2.5 text-white shadow-lift md:bottom-8"
    >
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FCD34D]" strokeWidth={2.4} />
      <span lang="bn" className="bn-tight text-[13px] font-semibold">
        {message}
      </span>
    </div>
  );
}
