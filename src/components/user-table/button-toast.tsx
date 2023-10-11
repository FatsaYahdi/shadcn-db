import { DeleteIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { useState } from "react"

export function ButtonToast({data}) {
  const { toast } = useToast()
  const [userData] = useState(data)
    return (
        <Button
          onClick={() => {
            toast({
              description: `You clicked user with name : "${userData.name}"`,
            })
          }}
        >
            <DeleteIcon className="h-5 w-5 text-white" />
        </Button>
    )
}