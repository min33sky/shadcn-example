import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full h-16 bg-background ">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-4">
        <nav className="space-x-4">
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
