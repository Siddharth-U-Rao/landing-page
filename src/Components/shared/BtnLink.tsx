interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden bg-violet-600 dark:bg-violet-700 hover:bg-violet-700 text-white cursor-pointer ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
