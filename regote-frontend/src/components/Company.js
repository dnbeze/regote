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
            <hr/>
            <p>{company.dateAdded}</p>
            <div>
                <h3>Notes:</h3>
                {company.notes && company.notes.length > 0 ? (
                    company.notes.map(note => (
                        <div key={note.noteid}>
                            <h4>{note.title}</h4>
                            <p>{note.body}</p>
                            <hr/>
                        </div>
                    ))
                ) : (
                    <p>No notes available</p>
                )}
            </div>
        </div>
    );
}

export default Company;