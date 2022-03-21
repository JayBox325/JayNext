export default function Home() {
    return (
        <div className="w-full bg-gray-200 min-h-screen row text-center">
            <div className="container max-w-4xl">
                <h1 className="text-2xl font-bold mb-4">Homepage</h1>
                <div className="w-content">
                    <p>A project built with NextJS will be delivered in two parts:</p>
                </div>

                <div className="grid grid-cols-2 mt-6 gap-6 lg:gap-8 xl:gap-10 lg:mt-10 xl:mt-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex justify-center border border-gray-600 rounded-xl p-6 h-full flex-col items-center text-center lg:py-8 xl:px-8">
                            <h2 className="title-6">CraftCMS site</h2>
                            <div className="text-base mt-2">
                                <p>This is where all your content is uploaded and stored.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex justify-center border border-gray-600 rounded-xl p-6 h-full flex-col items-center text-center lg:py-8 xl:px-8">
                            <h2 className="title-6">NextJS Web App</h2>
                            <div className="text-base mt-2">
                                <p>This is what you&apos;re viewing now. It&apos;s a separate NextJS frontend that hooks into your CraftCMS site and pulls the data across.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-content text-left mt-6 lg:mt-10 xl:mt-12">
                    <p>We take this approach because NextJS apps are very quick due to the ability to provide users with pre-built HTML templates with no database queries or build times as the user lands on a page.</p>
                    <p>With a default CraftCMS project, when a user lands on a page, the browser makes a request to the server, which is then handled by Craft. At this point there are database queries to fetch the data. Only at this point can the HTML be rendered and sent back to the user. This all takes time.</p>
                    <p>Whereas, with NextJS, we are able to build these HTML files beforehand so when a user lands on a page, the brower makes a request and immediately just recieves the HTML. No queries!</p>
                </div>
            </div>
        </div>
    )
}