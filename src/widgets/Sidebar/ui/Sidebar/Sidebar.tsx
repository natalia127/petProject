import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme="secondary"
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme="secondary"
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
                {/* <BugButton /> */}
            </div>
        </div>
    );
}
