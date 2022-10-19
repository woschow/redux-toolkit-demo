import * as React from "react";
import * as strings from "ReduxToolkitDemoWebPartStrings";
import { IListItemProps } from "../../../models/IListItemProps";
import { IPost } from "../../../models/IPost";

const PostItem = ({data, remove, update}: IListItemProps<IPost>) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(data)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ""
        update({...data, title})
    }

    return (
        <div className="card m-2 w-100 float-lg-start" key={data.id}>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">ID: {data.id}</p>
                <p className="card-text">Author: {data.author}</p>
                <div className="float-lg-end">
                    <button className="btn btn-primary" onClick={handleUpdate}>{strings.BtnUpdateTitle}</button>
                    <button className="btn btn-danger m-lg-2" onClick={handleRemove}>{strings.BtnDeleteTitle}</button>
                </div>

            </div>
        </div>
    );
}

export default PostItem;

