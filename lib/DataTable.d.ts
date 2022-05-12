import * as React from "react";
import * as PropTypes from "prop-types";
import { ChildrenProps, ClassNameProps } from "./types";
export declare const SortIndicator: (props: {
    direction?: 'asc' | 'desc';
}) => JSX.Element | null;
export interface DataTableProps extends ClassNameProps, ChildrenProps {
    selectable?: boolean;
    multiSelect?: boolean;
    onSelectionChange?: () => void;
}
export declare class DataTable extends React.Component<DataTableProps> {
    getChildContext(): {
        dataTable: {
            selectable: boolean | undefined;
            onSelectedChange: (rowIndex: number, selected: boolean) => void;
        };
    };
    static childContextTypes: {
        dataTable: PropTypes.Requireable<object>;
    };
    private handleSelectedChange;
    render(): JSX.Element;
}
export declare const DataTableHead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
export declare const DataTableFoot: (props: React.HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
export declare const DataTableRowGroup: (props: React.HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
export declare const DataTableBody: (props: {
    emptyMessage?: string;
} & React.HTMLAttributes<HTMLTableSectionElement>) => JSX.Element;
export declare const DataTableRow: (props: React.HTMLAttributes<HTMLTableRowElement>) => JSX.Element;
export interface DataTableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    align?: 'left' | 'right' | 'center';
    clickable?: boolean;
}
export declare const DataTableDataCell: (props: DataTableCellProps) => JSX.Element;
export interface DataTableHeaderCellProps extends DataTableCellProps {
    sortDirection?: 'asc' | 'desc';
    width?: string;
}
export declare const DataTableHeaderCell: (props: DataTableHeaderCellProps) => JSX.Element;
