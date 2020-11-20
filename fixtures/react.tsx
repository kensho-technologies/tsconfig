import {useState} from 'react'

interface FooProps {
  num: number
  str: string
}

export default function Foo(props: FooProps): JSX.Element {
  const {num, str} = props
  const [count] = useState(0)
  return (
    <div>
      {count}
      {num}
      {str}
    </div>
  )
}
