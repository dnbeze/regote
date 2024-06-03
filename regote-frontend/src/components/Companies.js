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
                data: "when i learn how to handle a bunch of data it will go here",
            },
            {
                id: 2,
                name: "Billy Corp",
                dateAdded: "1903-05-05",
                primaryPOC: "Billy John",
                data: "when i learn how to handle a bunch of data it will go here",
            },
        ];
        setCompanies(companiesList)
    }, []);

    return(
            <div>
                <h2>Companies!</h2>
                <hr />

                <table className="table-container">
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