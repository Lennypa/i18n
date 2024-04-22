'use client'

import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react"


export default function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

const onSelectChange = (e: ChangeEvent<HTMLSelectElement> ) => {
    const nextLocale = e.target.value;
    startTransition(() => {
        router.replace(`/${nextLocale}`)
    })
}

    return (
        <label className="border-2 rounded">
            <p className="sr-only">Change language</p>
            <select onChange={onSelectChange}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </label>
    )
}