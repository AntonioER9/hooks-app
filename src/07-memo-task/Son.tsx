import React from 'react';

interface Props {
  numero: number;
  incrementar: Function;
}

export const Son = React.memo(({ numero, incrementar }: Props) => {

  console.log('  Me volví a generar :(  ');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  )
})