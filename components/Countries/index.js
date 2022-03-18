import CountriesClient from "./client-side";
import CountriesServer from "./server-side";
import CountriesStatic from "./static";

function countries(props) {
    const dataType = props.dataType ?? 'client'
    const countries = props.countries ?? null

    switch (dataType) {
        case 'client':
            return <CountriesClient />

        case 'server':
            return <CountriesServer countries={countries} />

        case 'static':
            return <CountriesStatic countries={countries} />
    }
}

export default countries