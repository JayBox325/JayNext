function Hero(props) {
    const {
        title,
        body,
        className
    } = props || {}

    return (
        <div className={`row ${className}`}>
            <div className="container">
                <div className="">
                    <h1 className="mb-4">{title}</h1>

                    {body ? (
                        <div className="w-content max-w-2xl mb-4">
                            {body}
                        </div>
                    ) : ''}

                    {/* <p>Client-side rendering (CSR) means rendering pages directly in the browser when the user arrives on it using JavaScript. All logic, data fetching, templating and routing are handled on the client rather than the server.</p>
                    <p>This leads to faster page-load times, but the content loads after the fact. This will include &aposLoading&apos states while the content is fetched and rendered.</p> */}

                </div>
            </div>
        </div>
    )
}

export default Hero