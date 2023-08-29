import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <nav>
          <Link href="/">홈</Link>
          <Link href="/dashboard">대시보드</Link>
        </nav>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
