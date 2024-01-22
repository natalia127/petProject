import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';
import {BugButton} from "app/provider/ErrorBoundary/ui/BugButton";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
        <div
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
          <button onClick={onToggle}>toggle</button>
          <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
              <BugButton/>
            </div>
      </div>
  );
}
