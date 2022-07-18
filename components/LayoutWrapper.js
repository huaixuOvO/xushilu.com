import headerNavLinks from '/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label={'序时录'}>
              <div className="flex items-center justify-between">
                <div className="text-xl sm:block font-normal text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 dark:text-gray-100 select-none tracking-tight px-3 py-1 duration-300">
                  序时录
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-6">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-lg px-3 py-2 font-normal text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 select-none"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center text-base leading-5">
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
