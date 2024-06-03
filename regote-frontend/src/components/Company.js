import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Company = () => {

    const [company, setCompany] = useState({});
    let { id } = useParams();

    useEffect(() => {

    }, [id]);
    return(
        <div>
            <h2>Company!</h2>
            <hr />
        </div>
    );
}

export default Company;