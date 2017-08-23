import * as React from "react";
import {
    DataTable, DataTableBody, DataTableDataCell, DataTableFoot, DataTableHead, DataTableHeaderCell,
    DataTableRow
} from "../main/typescript/DataTable";

function range(n:number) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result;
}

const OneToFive = range(5);
const OneTo30 = range(30);
const AToC = ['A', 'B', 'C'];
const AToH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const DataTableSection = () => (
    <section>
        <h2>data table</h2>
        <DataTable className="example-data-table">
            <DataTableHead>
                <DataTableRow>
                    <DataTableHeaderCell>Column A</DataTableHeaderCell>
                    <DataTableHeaderCell>Column B</DataTableHeaderCell>
                    <DataTableHeaderCell>Column C</DataTableHeaderCell>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                { OneToFive.map(rowNumber => (
                    <DataTableRow key={rowNumber}>
                        <DataTableDataCell>A{rowNumber}</DataTableDataCell>
                        <DataTableDataCell>B{rowNumber}</DataTableDataCell>
                        <DataTableDataCell>C{rowNumber}</DataTableDataCell>
                    </DataTableRow>
                ))}
            </DataTableBody>
            <DataTableFoot>
            </DataTableFoot>
        </DataTable>

        <DataTable className="example-data-table">
            <DataTableHead>
                <DataTableRow>
                    { AToH.map(letter => (
                        <DataTableHeaderCell key={letter}>Column {letter}</DataTableHeaderCell>
                    ))}
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                { OneTo30.map(rowNumber => (
                    <DataTableRow key={rowNumber}>
                        { AToH.map(letter => (
                            <DataTableDataCell key={letter}>Rather long Cell {letter}{rowNumber}</DataTableDataCell>
                        ))}
                    </DataTableRow>
                ))}
            </DataTableBody>
            <DataTableFoot>
            </DataTableFoot>
        </DataTable>
    </section>
);