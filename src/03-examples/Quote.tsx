import { useLayoutEffect, useRef, useState } from 'react';

interface Props {
  author: string;
  quote: string;
}

export const Quote = ({ author, quote }: Props) => {

  const pRef = useRef<any>();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {

    const { height, width } = pRef.current.getBoundingClientRect(); // Component measurements
    setBoxSize({ height, width });

  }, [quote])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: 'flex' }}
      >
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer"> {author} </footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}