import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Companies = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,

        }

        fetch(`http://localhost:8080/companies`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data);
            })
            .catch(err => {
                console.log(err);
            })
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