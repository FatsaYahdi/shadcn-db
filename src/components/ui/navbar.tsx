import { Button } from "./button"

const Navbar = ({onClick, open}) => {
    return (
        <div className={`w-full h-full max-h-14 bg-black fixed text-white flex items-center ${open ? "ml-14" : "ml-64"}`}>
            <Button onClick={onClick}>Toggle</Button>
        </div>
    )
}
export { Navbar }