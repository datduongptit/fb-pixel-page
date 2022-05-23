import React from 'react';
import { useRouter } from 'next/router';
import { Example } from './styles/Example.styled';

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Example type="button" onClick={() => router.push('/')}>
            Home
          </Example>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/blogs')}>
            Blogs
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/pixel')}>
            Pixel
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/partner')}>
            Partner
          </button>
        </li>
        <li>
          <button type="button" onClick={() => router.push('/pricing')}>
            Pricing
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
