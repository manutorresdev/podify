import { SVGProps } from '@_types/types'

export default function Search (props: SVGProps) {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
