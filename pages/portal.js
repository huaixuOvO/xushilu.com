import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Portal - 序时录`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pl-2 space-y-2 md:space-y-5">
          <h1 className="text-2xl font-normal leading-4 tracking-tighter text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-4 md:text-3xl md:leading-4">
            Portal
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"></p>
        </div>
        <div className="container py-6">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
