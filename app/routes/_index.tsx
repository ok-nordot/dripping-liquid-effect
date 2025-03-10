import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Dripping Liquid' },
    {
      name: 'description',
      content:
        'This is dripping liquid animation using gooey effect with CSS and SVG.',
    },
  ]
}

export default function Index() {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden filter-[url(#goo)]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="nth-of-type-1:animation-delay-1000 nth-of-type-2:animation-delay-2000 nth-of-type-3:animation-delay-3000 nth-of-type-4:animation-delay-4000 nth-of-type-5:animation-delay-5000 nth-of-type-6:animation-delay-6000 nth-of-type-7:animation-delay-7000 nth-of-type-8:animation-delay-8000 nth-of-type-9:animation-delay-9000 nth-of-type-10:animation-delay-10000 nth-of-type-11:animation-delay-11000 nth-of-type-12:animation-delay-12000 nth-of-type-13:animation-delay-13000 nth-of-type-14:animation-delay-14000 nth-of-type-15:animation-delay-15000 absolute -bottom-[20%] h-[100px] w-[100px] animate-[fall_20s_infinite] rounded-full bg-white nth-of-type-1:left-[30%] nth-of-type-10:left-[55%] nth-of-type-11:left-[35%] nth-of-type-12:left-[50%] nth-of-type-13:left-[65%] nth-of-type-14:left-[40%] nth-of-type-15:left-[60%] nth-of-type-2:left-[60%] nth-of-type-3:left-[25%] nth-of-type-4:left-[75%] nth-of-type-5:left-[35%] nth-of-type-6:left-[50%] nth-of-type-7:left-[65%] nth-of-type-8:left-[35%] nth-of-type-9:left-[55%] nth-of-type-[2n]:h-[60px] nth-of-type-[2n]:w-[60px] nth-of-type-[3n]:h-[120px] nth-of-type-[3n]:w-[120px]"
          />
        ))}
        <div className="absolute top-0 left-0 h-1/10 w-full bg-white" />
        <div className="absolute bottom-0 left-0 h-1/10 w-full bg-white" />
      </div>
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={10} />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 30 -15"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
