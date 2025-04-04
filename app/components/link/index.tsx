import { ComponentProps } from 'react'
import NextLink from 'next/link'
import { cn } from '@/app/lib/utils'

type LinkProps = ComponentProps<typeof NextLink>

export const Link = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-gray-300 text-sm hover:text-[#3399ff] transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  )
}
