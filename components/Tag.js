import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-2 text-base font-medium uppercase text-gray-500 dark:text-gray-300 transform hover:text-gray-700 dark:hover:text-gray-300 duration-50">
        # {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
