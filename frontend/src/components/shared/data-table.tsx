import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

type Column = {
  key: string;

  label: string;

  render?: (value: any, row: any) => React.ReactNode;
};

type Props = {
  columns: Column[];

  data: any[];

  emptyState?: React.ReactNode;

  onRowClick?: (row: any) => void;
};

export default function DataTable({
  columns,
  data,
  emptyState,
  onRowClick,
}: Props) {
  if (!data.length && emptyState) {
    return emptyState;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              onClick={() => onRowClick?.(row)}
              className={
                onRowClick
                  ? "cursor-pointer hover:bg-slate-50 transition-colors"
                  : ""
              }
            >
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
