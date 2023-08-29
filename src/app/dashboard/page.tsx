import React from 'react';
import TeamSwitcher from './components/team-switcher';
import MainNav from './components/main-nav';
import Search from './components/search';
import UserNav from './components/user-nav';
import { Button } from '@/components/ui/button';
import CalendarDateRangePicker from './components/date-range-picker';

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full bg-slate-900/80">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 w-full">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>다운로드</Button>
          </div>
        </div>
        {/* Tabs */}
      </div>
    </div>
  );
}
