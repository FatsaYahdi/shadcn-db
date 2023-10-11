import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { ButtonToast } from "./button-toast"

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
        header: ({ column }) => {
            return (
                <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            )
        },
        cell: ({ row }) => (
            <div className="font-semibold">{row.getValue("name")}</div>
        ),
        enableHiding: false,
    }, {
         accessorKey: "email",
        header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    }, {
        id: "actions",
        enableHiding: false,
        enableSorting: false,
        header: () => (
            <>Actions</>
        ),
        cell: ({row}) => { 
        return (
            <>
                <ButtonToast data={row.original} />
            </>
        )
        }
    }
]