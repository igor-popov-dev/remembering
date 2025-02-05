import { InputHTMLAttributes, ReactNode } from 'react';

export interface ActionBtnProps extends InputHTMLAttributes<HTMLButtonElement>{
    type: 'play' | 'done'
}