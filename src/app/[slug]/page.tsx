import { allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Footer from '@/components/Footer'
import { Mdx } from '@/components/Mdx'

type Props = {
  params: {
    slug: string
  }
}

async function getDocFromParams({ params }: Props) {
  const doc = allBlogs.find((doc) => doc.slug === params.slug)

  return doc ?? null
}

const BlogPage = async ({ params }: Props) => {
  const post = await getDocFromParams({ params })

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col my-8">
      <div className="mb-4 sm:mb-8">
        <h1 className="text-2xl sm:text-4xl font-black">{post.title}</h1>
        <time dateTime={post.date} className="my-2 block text-sm w-full text-gray-600 text-left">
          {format(parseISO(post.date), 'MMMM dd, yyyy')}
        </time>
        <p className="text-gray-500 italic text-sm">{post.author}</p>
      </div>
      <div className="h-[70vh] mb-4 overflow-auto">
        <Mdx code={post.body.code} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default BlogPage
