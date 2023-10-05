import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown, DeleteIcon } from "lucide-react"
import { Checkbox } from "../ui/checkbox"

export type User = {
    id: string
    email: string
    name: string
}

export const columnUser: ColumnDef<User>[] = [
  {
        id: "id",
        accessorKey: "id",
        header: ({ table }) => (
            <Checkbox
            checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
        ),
        enableHiding: false,
        enableSorting: false,
    }, {
        accessorKey: "name",
        header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        ),
    }, {
        accessorKey: "email",
        header: ({column}) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    }, {
        id: "actions",
        header: () => (
            <>Actions</>
        ),
        cell: () => { 
        return (
            <>
                <Button variant="destructive">
                    <DeleteIcon className="h-4 w-4 text-[red]" />
                </Button>
            </>
        )
        }
    }
]