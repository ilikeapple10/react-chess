import React from "react";
import styles from "./board.module.scss";
import {BoardNumbersByLetter, Colors} from "../../types";
import classNames from "classnames";


interface CellProps {
    color: Colors;
    x: string;
    y: number;
    cellClicked: (x: number, y: number) => void;
    isAvailableForMove?: boolean;
    isHavingFigure?: boolean;
    isSelected?: boolean;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
    return (
        <li onClick={() => props.cellClicked(BoardNumbersByLetter[props.x], props.y)} id={`cell-${props.x}-${props.y}`} className={
            classNames(styles.cell, {
                [styles.cellWhite]: props.color === Colors.WHITE,
                [styles.cellBlack]: props.color === Colors.BLACK,
                [styles.availableCell]: props.isAvailableForMove && !props.isHavingFigure,
                [styles.cellSelected]: props.isSelected,
            })
        }>
            <div className={classNames(styles.cellCircle, {
                [styles.cellCircleShow]: props.isAvailableForMove && !props.isHavingFigure
            })}></div>
        </li>
    )
}

export  default Cell;