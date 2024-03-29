import Link from 'next/link'
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { _roboto } from '@/utils/fonts'

const PostCard = (post: Blog) => {
  return (
    <div className='w-[100%] md:w-[80%] lg:w-[60%] shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-md flex items-center bg-slate-50 rounded-l-lg max-h-[180px]'>
      <div className='rounded-l-lg'>
        <Image
          width={180}
          height={150}
          src={post.thumbnailUrl}
          alt={post.title}
          className='rounded-l-lg'
        />
      </div>
      <div className='flex flex-col items-start justify-between px-3 w-full h-full'>
        <h2
          className={`${_roboto.className} my-5 text-base sm:text-xl font-bold w-full text-left`}
        >
          <Link href={post.slug}>{post.title}</Link>
        </h2>
        <time
          dateTime={post.date}
          className='mb-2 block text-xs w-full text-gray-600 text-right'
        >
          {format(parseISO(post.date), 'MMMM dd, yyyy')}
        </time>
      </div>
    </div>
  )
}

export default PostCard
