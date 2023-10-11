import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";
import { useState } from "react";
import { DataProps } from "./combo-box";

export default function Modal({ onClose, data}) {
  const { toast } = useToast()
    const closeModal = () => {
        onClose()
  }
  const [value] = useState<DataProps[]>(data)
  const [name, setName] = useState<string>("")
    function onSubmit(data) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-80 rounded-md p-4">
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      })
  }
  function handleCreate() {
    value.push({
      label: name,
      value: name.toLocaleLowerCase().replace(/\s/g, ''),
    })
    setName("")
  }
    return (
      <>
        {/* overlay */}
        <div className="fixed inset-0 z-50 bg-white/80 animate-in" onClick={closeModal}>
        </div>
          {/* content */}
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 animate-in zoom-out-95 zoom-in-95 slide-out-to-left-1/2 slide-out-to-top-[48%] slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg md:w-full" id="content">
            <form>
                <div className="grid w-full items-center gap-1.5 mb-2">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="flex justify-end">
              <Button type="button" variant="outline" onClick={() => {
                onSubmit(name)
                closeModal()
                handleCreate()
              }}>Submit</Button>
            </div>
            </form>
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none bg-slate-100 text-slate-500" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
        </div>
        </>
    )
}