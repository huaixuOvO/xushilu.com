import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-600`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="px-4 mb-3 text-2xl font-normal leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="whitespace-pre-line px-4 mb-3 prose dark:text-gray-300 max-w-none">
          {description}
        </p>
      </div>
    </div>
  </div>
)

export default Card
