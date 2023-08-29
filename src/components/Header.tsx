import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
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
