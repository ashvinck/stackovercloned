import React, { useState } from 'react'
import { TagsInput } from "react-tag-input-component";
import './TagsInput.css';


const ReactTags = () => {
    const [selected, setSelected] = useState(["tag-example"]);

    return (
        <div className='tags-input'>
            <pre>{JSON.stringify(selected)}</pre>
            <TagsInput
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="Enter the required tags and press enter"
            />
        </div>
    )
}

export default ReactTags;