'use client'

export default function Error({error,reset}:{error:Error,reset:()=>void}){ 
    return (
        <div className="p-4 max-w-md mx-auto">
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}