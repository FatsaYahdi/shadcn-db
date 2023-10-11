import * as React from "react"
import {
  Check,
  ChevronsUpDown
} from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Modal from "./modal"

const values = [
  {
    value: "value1",
    label: "Value1",
  },
  {
    value: "value2",
    label: "Value2",
  },
  {
    value: "value3",
    label: "Value3",
  },
  {
    value: "value4",
    label: "Value4",
  },
  {
    value: "value5",
    label: "Value5",
  },
]

export interface DataProps {
  value: string
  label: string
}

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [data] = React.useState<DataProps[]>(values)
  return (
      <>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} data={data} />
      )}
      <div className="w-full min-h-screen flex items-center justify-center">
      <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? values.find((val) => val.value === value)?.label
            : "Select company..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search company..." />
          <CommandEmpty>
          No results found, <span className="text-blue-500 font-bold cursor-pointer" onClick={() => setIsOpen(true)}>Create new One</span>
          </CommandEmpty>
          <CommandGroup>
            {values.map((val) => (
              <CommandItem
                key={val.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === val.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {val.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
        </Popover>
      </div>
        </>
  )
}
