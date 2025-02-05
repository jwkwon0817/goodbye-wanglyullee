import * as s from "./styles.css.ts"
import cn from "classnames";
import {colorVars, StackAlign, Typo, VStack, Weight} from "@tapie-kr/inspire-react";

export enum LetterBoxTheme {
    PINK = 'pink',
    BLUE = 'blue',
    GREEN = 'green',
    YELLOW = 'yellow',
}

interface LetterBoxProps {
    content: string;
    from : string;
    theme : LetterBoxTheme;
}

export default function LetterBox(props : LetterBoxProps ) {
    const {content, from, theme} = props;
    return(
        <VStack
         className={cn(s.base, s[theme])}
         align={StackAlign.START}
        >
            <Typo.Base weight={Weight.SEMIBOLD} color = {colorVars.solid.white} className={s.from}>
                From. {from}
            </Typo.Base>
            <Typo.Base weight={Weight.SEMIBOLD} color = {colorVars.solid.white}>
                {content}
            </Typo.Base>
        </VStack>
    )
}