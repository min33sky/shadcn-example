import React from 'react';
import TeamSwitcher from './components/team-switcher';

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <div>메인 네비게이션</div>
          <div>
            <div>검색창</div>
            <div>유저 드롭다운 메뉴</div>
          </div>
        </div>
      </div>
    </div>
  );
}
