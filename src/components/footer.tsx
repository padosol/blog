import Link from 'next/link';

import IconGithub from '@/components/icon/github';

export const Footer = () => {
  return (
    <footer className='mb-16 mt-20 flex flex-col items-center justify-center gap-4 text-center print:hidden'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/padosol' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2024. <span className='font-semibold'>Padosol</span> all rights reserved.
      </div>
    </footer>
  );
};