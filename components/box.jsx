import Link from "next/link";
import { ArchiveBoxIcon } from '@heroicons/react/24/outline'

export default function Card({ link, name, description }) {
  return (
    <Link href={link}>
      <div className="relative block overflow-hidden p-10 bg-white shadow-lg rounded-xl dark:bg-opacity-5 no-underline text-black dark:text-white">
        <div className="inline-flex items-center space-x-3">
          <div className="flex items-center justify-center bg-black rounded-full bg-opacity-5 w-9 h-9 icon-circle">
            <ArchiveBoxIcon
              className="h-8 w-8 dark:text-white flex-shrink-0 p-1.5 text-black block"
              aria-hidden="true"
            />
          </div>
          <h3 className="m-0 text-lg font-semibold leading-6 tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>
        </div>
        <div>
          <p className="mt-2 text-base font-medium leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}