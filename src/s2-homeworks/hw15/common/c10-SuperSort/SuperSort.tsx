import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandIcon from '@mui/icons-material/Expand';

// добавить в проект иконки и импортировать
const downIcon = <KeyboardArrowDownIcon />
const upIcon = <KeyboardArrowUpIcon />
const noneIcon = <ExpandIcon />

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    console.log("sort", sort)
    if(sort === ""){
        return sort = down
    }else if (sort === "1tech"){
        return sort = up
    }else {
        return ""
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            style={{cursor: "pointer"}}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={""}
            />

            {icon}
        </span>
    )
}

export default SuperSort
