import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';
import {BugButton} from "app/provider/ErrorBoundary/ui/BugButton";
import {Button} from "shared/ui/Button/Button";

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
            data-testid="sidebar"
          className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                toggle
            </Button>
          <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
              <BugButton/>
            </div>
      </div>
  );
}
