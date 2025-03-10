import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Template' },
    {
      name: 'description',
      content:
        'This is a template for Remix, including TypeScript, Tailwind CSS, and more.',
    },
  ]
}

export default function Index() {
  return (
    <div>
      <h1 className="text-9xl">This is Remix Template</h1>
    </div>
  )
}
