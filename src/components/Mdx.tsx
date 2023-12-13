import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
interface Props {
  code: string
}

const components = {
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a target="_blank" rel="noopener" {...props} className={'text-blue-700 text-2xl'} />
  ),
  p: ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} className={'text-justify'} />,
  blockquote: ({ ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className={'border-l-4 border-red-400 mt-2 pl-4 italic'} />
  ),
  img: ({ ...props }) => {
    return (
      <Image
        height={500}
        width={500}
        src={props.src}
        alt={props.alt}
        {...props}
        className={'mx-auto shadow-[0_5px_15px_rgba(0,0,0,0.35)] mb-2 rounded-lg'}
      />
    )
  },
}

export function Mdx({ code }: Props) {
  const Component = useMDXComponent(code)

  return (
    <div className="prose prose-slate flex-1">
      <Component components={components} />
    </div>
  )
}
