import { cn } from "@/utils/MergeClassNames"

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h2 className={cn("text-2xl font-semibold flex items-center gap-3", className)}>
      {children}
    </h2>
  );
}

export default CardTitle;

