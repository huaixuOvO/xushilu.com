import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children}) {

  return (
    <>
      <PageSEO title={`About - 槐序`} description={`About me - 槐序`} />
      <div className="container mx-auto px-4 lg:px-20 pb-10 pt-5 md:pt-10 lg:pt-10">
        <div className="text-center  pl-2 space-y-2 md:space-y-5 pb-6">
          <h1 className="text-2xl font-normal leading-4 tracking-tighter text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-4 md:text-2xl md:leading-4">
            About
          </h1>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="container mx-auto pt-4 prose dark:prose-dark max-w-3xl text-center">
            {children} 
          </div>
        </div>
      </div>
    </>
  )
}
