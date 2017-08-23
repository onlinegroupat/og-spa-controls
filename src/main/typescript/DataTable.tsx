import * as React from "react";
import {Icon} from "./Icon";
import {MaterialIcon} from "./MaterialIcon";
import {ClassList} from "./ClassList";
import {ChildrenProps, ClassNameProps} from "./types";
import {PropTypes} from "react";

export const SortIndicator = (props:{ direction?:'asc'|'desc' }) => {
    switch (props.direction) {
        case 'asc': return <Icon>{MaterialIcon.arrow_upward}</Icon>;
        case 'desc': return <Icon>{MaterialIcon.arrow_downward}</Icon>;
        case undefined: return null;
    }
};

//
// Table
//
export interface DataTableProps extends ClassNameProps, ChildrenProps {
    selectable?:boolean;
    multiSelect?:boolean;
    onSelectionChange?:() => void;
}

const DataTableContextTypes = {
    dataTable: PropTypes.object
};

export class DataTable extends React.Component<DataTableProps> {

    getChildContext() {
        return {
            dataTable: {
                selectable: this.props.selectable,
                onSelectedChange: this.handleSelectedChange
            }
        };
    }

    static childContextTypes = DataTableContextTypes;

    private handleSelectedChange = (rowIndex:number, selected:boolean) => {
        // TODO
    };

    render() {
        return (
            <div className={this.props.className}>
                <table>
                    {this.props.children}
                </table>
            </div>
        );
    }
};


export const DataTableHead = (props:React.HTMLAttributes<HTMLTableSectionElement>) => <thead {...props}/>;
export const DataTableFoot = (props:React.HTMLAttributes<HTMLTableSectionElement>) => <tfoot {...props}/>;

//
// Row group (tbody.row-group)
//
export const DataTableRowGroup = (props:React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} className={ClassList.compute('row-group', props.className)} />
);

//
// Table body
//
export const DataTableBody = (props:{ emptyMessage?:string; } & React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props}>
        {props.children || (props.emptyMessage && <caption className="empty-message">{props.emptyMessage}</caption>)}
    </tbody>
);

//
// Table row
//
export const DataTableRow = (props:React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props}/>
);


//
// Common for cells Cells (th & td)
//
export interface DataTableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    align?:'left'|'right'|'center';
    clickable?:boolean;
}

function computeTableCellClassName(props:DataTableCellProps) {
    return ClassList.compute(
        `align-${props.align || 'center'}`,
        (props.onClick || props.clickable) ? 'clickable' : undefined,
        props.className);
}

export const DataTableDataCell = (props:DataTableCellProps) => (
    <td {...props} className={computeTableCellClassName(props)} />
);

//
// Header cell (th)
//
export interface DataTableHeaderCellProps extends DataTableCellProps {
    sortDirection?:'asc'|'desc';
    width?:string;
}
export const DataTableHeaderCell = (props:DataTableHeaderCellProps) => {
    const { sortDirection = undefined, children = undefined, width = undefined, ...otherProps } = { ...props };
    if (width) {
        if (!otherProps.style) {
            otherProps.style = {};
        }
        otherProps.style.width = width;
    }
    return (
        <th {...otherProps} className={computeTableCellClassName(props)}>
            { children }
            { sortDirection && <SortIndicator direction={sortDirection}/> }
        </th>
    );
}

