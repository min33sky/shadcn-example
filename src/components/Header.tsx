import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <Link href="/">홈</Link>
          <Link href="/dashboard">대시보드</Link>
        </nav>
      </div>
    </header>
  );
}
