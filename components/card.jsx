import Link from "next/link";

export default function Card({ href, icon, title, arrow }) {
  const animatedArrow = arrow ? (
    <span className="transition-transform duration-75 group-hover:translate-x-[2px]">
      →
    </span>
  ) : null
  return (
    <Link href={href} className="docs-card group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none">
      <span
        className="docs-title gap-2 p-4 text-gray-700 dark:text-neutral-200 hover:text-gray-900 dark:hover:text-neutral-50">
        {icon}
        {title}
        {animatedArrow}
      </span>
    </Link>
  )
}