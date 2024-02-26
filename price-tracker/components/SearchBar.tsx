"use client"

// import { log } from "console";
import { url } from "inspector"
import { FormEvent, useState } from "react"


const isValidAmazonProductsUrl = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        const hostName = parsedUrl.hostname;
        // check if host name contain amazon.com
        if (
            hostName.includes("amazon.com") ||
            hostName.includes("amazon.") ||
            hostName.endsWith("amazon")
        ) {
            return true
        }
    } catch (error) {
        return false
    }

}
const SearchBar = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValidLink = isValidAmazonProductsUrl(searchPrompt)
        if (!isValidLink) return alert("Provide link amazon now")

        try {
            setIsLoading(true)
        } catch (error) {
            console.log(error);


        } finally {
            setIsLoading(false)
        }

    }
    return (
        <form className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}>
            <input type="text"
                placeholder="enter url "
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                className="searchbar-input"
            />
            <button disabled={searchPrompt === ''} type="submit" className="searchbar-btn"> {isLoading ? "Searching......" : "Search"}</button>
        </form>
    )
}

export default SearchBar