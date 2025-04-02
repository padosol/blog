// Pre.tsx
"use client";
import { useRef, useState } from "react";
import { Clipboard, Check } from "lucide-react";
 
interface PreProps {
  children?: React.ReactNode;
  props?: React.HTMLAttributes<HTMLPreElement>;
}
 
export const Pre = ({ children, ...props }: PreProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);
 
  const handleCopyText = async () => {
    const text = preRef.current?.innerText;
    await navigator.clipboard.writeText(text ?? "");
 
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
 
  return (
    <div className="relative">
      <div className="absolute flex items-center space-x-2 top-0 right-0 m-[11px] bg-primary text-primary-foreground px-2 rounded-md hover:bg-primary/50 transition-colors duration-200">
        {
          isCopied ? 
          <div className="flex items-center cursor-default">
            <Check />Copied!
          </div> : 
          <button onClick={handleCopyText} className="cursor-pointer flex items-center">
            <Clipboard width={16} className="mr-2"/>
            Copy
          </button>
        }
      </div>
      <pre {...props} ref={preRef}>
        {children}
      </pre>
    </div>
  );
};
 