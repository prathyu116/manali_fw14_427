import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

export const TodoDetail = ()=>{
    const {id} = useParams();
    const [single, setSingle] = useState({});

    const getOne = async()=>{
        let res = await(`http://localhost:5000/todos${id}`);
        let data = await res.json();
        setSingle(data);
    }
    useEffect(()=>{
        getOne();
    },[])

    return (
        <div className="mainflex">
            <p>{single.title}</p>
            <p>id:{single.id}</p>
            <Link to={`todos/${single.id}/edits`} className="linktoedit">
                <button>EDit todo</button>
            </Link>
        </div>
    )
}