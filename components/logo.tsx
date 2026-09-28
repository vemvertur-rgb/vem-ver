import Image from 'next/image'
import { cn } from '@/lib/utils'
import { asset } from '@/lib/links'

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <Image
        src={asset('/images/logo-vemver.png')}
        alt=""
        width={40}
        height={40}
        className="size-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-lg font-semibold tracking-tight',
            light ? 'text-white' : 'text-foreground',
          )}
        >
          VEM VER Turismo
        </span>
        <span
          className={cn(
            'mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]',
            light ? 'text-white/75' : 'text-muted-foreground',
          )}
        >
          Passeios & Pousada
        </span>
      </span>
    </span>
  )
}
