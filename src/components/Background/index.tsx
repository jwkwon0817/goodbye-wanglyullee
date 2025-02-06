import { PropsWithChildren } from "react";

import * as s from './style.css';

export default function Background({children}: PropsWithChildren) {
    return (
        <main className={s.base}>
            {children}
        </main>
    )
}