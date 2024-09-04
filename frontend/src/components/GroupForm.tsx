import { useState } from "react"

const GroupForm = () => {
    const [groupName, setGroupName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')



    return (
        <form >
            <div className="mb-3">
                <label htmlFor="groupName" className="form-label">Group Name</label>
                <input id="groupName" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input id="firstName" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input id="lastName" type="text" className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default GroupForm