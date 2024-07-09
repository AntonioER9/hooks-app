import React from 'react';

interface Props {
  increment: Function;
}

export const ShowIncrement = React.memo(({ increment }: Props) => {

  console.log(' Me volví a generar :( ');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(1);
      }}
    >
      Incrementar
    </button>
  )
})