import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>

        <div className={cls.links}>
            <Link className={cls.mainLink} to="/">Главная</Link>
            <Link to="/about">О программе</Link>
        </div>

    </div>
);
