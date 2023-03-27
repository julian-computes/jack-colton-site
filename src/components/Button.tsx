import { FormEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode,
  onClick: FormEventHandler,
}

export default function Button({children, onClick}: Props) {
  return <>
    <button
      className='max-h-20 border-stone-300 border active:scale-110 mx-5 px-5 py-4 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
      role='navigation'
      onClick={onClick} type='submit'
    >
      {children}
    </button>

  </>
}