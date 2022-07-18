import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import TOC from '@/components/TOC'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children, toc }) {
  const { slug, fileName, date, title, tags, readingTime, lastmod } = frontMatter
  const editUrl = (fileName) =>
    `https://www.github.com/huaixuOvO/xushilu.com/blob/master/data/blog/${fileName}`
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme = theme === 'dark' || resolvedTheme === 'dark' ? 'transparent_dark' : 'light'

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/posts/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
        title={title + ' - 序时录'}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dd className="text-sm font-normal  text-gray-500 dark:text-gray-300">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div className="py-4">
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                Word count:{readingTime.words} Reading time:{Math.round(readingTime.minutes)}min
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-8 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            <footer className="sticky top-0 xl:divide-y xl:dark:divide-gray-700">
              <div className="pb-4 hidden xl:block">
                <TOC toc={toc} />
              </div>
              <div className="text-sm tracking-normal text-gray-500 dark:text-gray-300 divide-gray-200 xl:divide-y dark:divide-gray-700">
                {tags && (
                  <div className="py-4">
                    <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-300 pb-2">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex-auto justify-between pb-4 xl:block xl:space-y-8 xl:pb-4">
                    {prev && (
                      <div>
                        <h2 className="mt-5 space-y-4 text-xs tracking-normal text-gray-500 uppercase dark:text-gray-300 pb-2">
                          Previous Article
                        </h2>
                        <div className="text-base text-gray-500 dark:text-gray-400 transform duration-300 hover:text-gray-800 dark:hover:text-gray-300 pl-2">
                          <Link href={`/posts/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="mt-5 space-y-4 text-xs tracking-normal text-gray-600 uppercase dark:text-gray-300 pb-2">
                          Next Article
                        </h2>
                        <div className="text-base text-gray-500 dark:text-gray-400 transform hover:text-gray-800 dark:hover:text-gray-300 pl-2 duration-300">
                          <Link href={`/posts/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="text-sm text-gray-500 dark:text-gray-400 pb-2 py-6 select-none">
                  Note.this work is licensed under{' '}
                  <Link
                    href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
                    className="transform hover:text-gray-800 dark:hover:text-gray-200 duration-300"
                  >
                    CC BY-NC 4.0
                  </Link>
                </div>

                <div className="top-0 pt-4 xl:pt-8">
                  {typeof lastmod === 'string' ? (
                    <div>
                      Lastmod:
                      <time dateTime={lastmod}>
                        {new Date(lastmod).toLocaleDateString(
                          siteMetadata.locale,
                          postDateTemplate
                        )}
                      </time>
                    </div>
                  ) : null}
                  <div className="py-4 text-sm text-gray-500 dark:text-gray-400 transform hover:text-gray-800 hover:dark:text-gray-300 duration-300">
                    <Link href={editUrl(fileName)}>{'View on github'}</Link>
                  </div>
                  <Link
                    href="/archive"
                    className="text-xs tracking-wide uppercase text-gray-500 dark:text-gray-400 transform hover:text-gray-800 dark:hover:text-gray-300 duration-300"
                  >
                    &larr; Back
                  </Link>
                </div>
              </div>
            </footer>
          </div>
          <Giscus
            id="comments"
            repo="huaixuOvO/xushilu.com"
            repoId="R_kgDOHl4HGg"
            category="Announcements"
            categoryId="DIC_kwDOHl4HGs4CP_Jc"
            mapping="pathname"
            reactionsEnabled="1"
            emit-metadata="0"
            inputPosition="top"
            theme={commentsTheme}
            lang="en"
            loading="lazy"
          />
        </div>
      </article>
    </>
  )
}
