import LangSelect from "./LangSelect";


export default function Navbar() {

    return (
        <div className="flex flex-row justify-end w-full h-24 p-4 absolute">
            <LangSelect />
        </div>
    )
}