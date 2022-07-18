import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title="序时录" description="宁鸣而死，不默而生。" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-5">
          <h2 className="text-xl font-nornal leading-4 tracking-tighter text-gray-700 dark:text-gray-300 sm:leading-4 md:leading-4">
            Latest Posts
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-9">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-500">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="leading-relaxed tracking-tight">
                            <Link
                              href={`/posts/${slug}`}
                              className="text-lg xl:text-xl text-gray-600 dark:text-gray-300 transform hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                            >
                              {title}
                            </Link>
                          </h2>
                        </div>
                        <div className="text-base text-gray-500 leading-loose dark:text-gray-400">
                          {summary}
                        </div>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/archive"
            className="text-gray-500 dark:text-gray-400 transform hover:text-gray-700 dark:hover:text-gray-300"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
