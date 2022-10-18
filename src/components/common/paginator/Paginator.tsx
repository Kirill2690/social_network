import {useState} from "react";
import s from './Paginator.module.css'
import {LeftSquareTwoTone, RightSquareTwoTone} from "@ant-design/icons";
import cn from 'classnames'
type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={cn(s.paginator)}>
            {portionNumber > 1 &&
                <LeftSquareTwoTone className={s.button} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</LeftSquareTwoTone>}

            <div className={s.paginatorNumbers}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span
                            key={p}
                            className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}</span>
                    })}
            </div>
            {portionCount > portionNumber &&
                <RightSquareTwoTone className={s.button}
                                    onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</RightSquareTwoTone>}
        </div>
    );
};
