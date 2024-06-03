import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Company = () => {

    const [company, setCompany] = useState({});
    let { id } = useParams();

    useEffect(() => {
        let myCompany = {
            id: 1,
            name: "Acme Corp",
            dateAdded: "2024-01-01",
            primaryPOC: "bob bob",
            notes: [{
                noteid: 6,
                title: "big ole title",
                body: "the data goes here",
            },],}
            setCompany(myCompany)
    }, [id])

    return(
        <div>
            <h2>Company: {company.name}</h2>
            <hr />
        </div>
    );
}

export default Company;