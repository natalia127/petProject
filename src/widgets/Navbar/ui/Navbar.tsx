import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <Link className={cls.mainLink} to="/">{t('Главная')}</Link>
                <Link to="/about">{t('О программе')}</Link>
            </div>

        </div>
    );
};
