import { useEffect, useRef, useState } from 'react'
import Link from '@/components/Link'

function TOC({ toc }) {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)
  const [TOC, setTOC] = useState([])
  useEffect(() => {
    let etoc = toc.map((e) => ({ ...e, children: [] }))
    for (let i = etoc.length - 1; i >= 0; i--) {
      if (etoc[i].depth == 1) continue
      for (let j = i; j >= 0; j--) {
        if (etoc[i].depth - etoc[j].depth == 1) {
          etoc[j].children.unshift(etoc[i])
          etoc[i].remove = true
          break
        }
      }
    }
    setTOC(etoc.filter((e) => !e.remove))
  }, [toc])

  let RenderToc = ({ item, activeId }) => {
    const isActive = (e) => {
      if ('#' + activeId === e.url) return true
      for (let i of e.children) if (isActive(i)) return true
      return false
    }
    return item.map((e, i) => (
      <div className="text-gray-500 dark:text-gray-400" key={i}>
        <Link href={e.url}>
          <p className={`${isActive(e) && 'border-cyan-500 text-cyan-500 dark:text-gray-100'}`}>
            {e.value}
          </p>
        </Link>
        {isActive(e) && e.children.length > 0 && (
          <div className="pl-1 mt-1 ml-4 text-gray-500 leading-8">
            <RenderToc item={e.children} activeId={activeId} />
          </div>
        )}
      </div>
    ))
  }

  return (
    toc.length > 0 && (
      <div className="mt-5 text-sm space-y-4">
        <p className="text-xs tracking-normal text-gray-500 uppercase dark:text-gray-300">
          On this page
        </p>
        <RenderToc item={TOC} activeId={activeId} />
      </div>
    )
  )
}

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({})
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement
        return map
      }, headingElementsRef.current)

      const visibleHeadings = []
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement)
      })

      const getIndexFromId = (id) => headingElements.findIndex((heading) => heading.id === id)

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id)
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        )
        setActiveId(sortedVisibleHeadings[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -40% 0px',
      threshold: 0.4,
    })

    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'))

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [setActiveId])
}

export default TOC
