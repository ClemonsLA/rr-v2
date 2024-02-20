export default function CreateLayout({children}){
    return (
        <main>
            <div className="h-[100vh] w-[100%] flex flex-wrap overflow-hidden justify-center content-center">
                <div className="h-[93vh] w-[93vw] box-border border-solid border-2 border-white overflow-y-auto">
                    {children}
                </div>
            </div>
        </main>
    )
}