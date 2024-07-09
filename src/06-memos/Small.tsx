import React from 'react';
// import { memo } from 'react';
interface Props {
  value?: number
}

export const Small = React.memo(({ value }: Props) => {

  console.log(' Me volví a dibujar :( ');

  return (
    <small>{value}</small>
  )
})