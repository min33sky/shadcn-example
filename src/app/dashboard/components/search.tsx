import { Input } from '@/components/ui/input';
import React from 'react';

export default function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="검색어를 입력하세요."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
