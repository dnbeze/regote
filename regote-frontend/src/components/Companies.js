import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        let companiesList = [
            {
                id: 1,
                name: "Acme Corp",
                dateAdded: "2024-01-01",
                primaryPOC: "bob bob",
                notes: [{
                    id: 2,
                    title: "big ole title",
                    body: "the data goes here",
                },{
                    id: 3,
                    title: "small title",
                    body: "moar data",
                }],
            },
            {
                id: 2,
                name: "Billy Corp",
                dateAdded: "1903-05-05",
                primaryPOC: "Billy John",
                notes: [{
                    id: 2,
                    title: "big ole title",
                    body: "the data goes here",
                },{
                    id: 3,
                    title: "small title",
                    body: "moar data",
                }],
            },
        ];
        setCompanies(companiesList)
    }, []);

    return(
            <div>
                <h2>Companies!</h2>
                <hr />

                <table className="table is-striped is-fullwidth">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date Added</th>
                        <th>Primary POC</th>
                    </tr>
                    </thead>
                    <tbody>
                    {companies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/companies/${m.id}`}>{m.name}</Link>
                            </td>
                            <td>{m.dateAdded}</td>
                            <td>{m.primaryPOC}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    );
}

export default Companies;