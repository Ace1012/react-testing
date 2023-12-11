import { useTable } from "react-table";
import { data } from "./Mock-Data";
import { columns } from "./columns";
import { useMemo } from "react";
import "./table.css"

interface IReactTableProps { }

const ReactTable = ({ }: IReactTableProps) => {
    const tableOptions = useMemo(() => ({
        columns,
        data
    }), [columns, data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable(tableOptions);

    console.log("#rows: ", rows)

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(group => (
                    <tr {...group.getHeaderGroupProps()}>
                        {
                            group.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr{...row.getRowProps()}>
                            {
                                row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))
                            }
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                {
                    footerGroups.map(group => (
                        <tr{...group.getFooterGroupProps()}>
                            {group.headers.map(column => (
                                <td {...column.getFooterProps()}>
                                    {column.render("Footer")}
                                </td>
                            ))}
                        </tr>
                    ))
                }
            </tfoot>
        </table>
    )
}
export default ReactTable;