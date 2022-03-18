function CountriesList(props) {
    const countries = props.countries

    return (
        <div>
            {countries.map((country) => (
                <div key={country.code}>
                    <h3>{country.emoji} - {country.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default CountriesList