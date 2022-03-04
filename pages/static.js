import client from "@/utils/apollo/client";
import GET_COUNTRIES from "@/utils/apollo/queries/getCountries";

export default function Static({ countries }) {
    return (
        <div className="w-full bg-red-200 h-screen flex items-center flex-col justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Static Rendering</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.code}>
                        <h3 className="font-bold">{country.emoji} {country.name}</h3>
                    </li>
                ))}
            </ul>.
        </div>
    )
}

// Fetching countries data

export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_COUNTRIES,
    });

    return {
        props: {
            countries: data.countries.slice(0, 20),
        },
    };
}