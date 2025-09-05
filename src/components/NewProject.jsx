export default function NewProject() {
    return (
        <div>
            <menu>
                <li>
                    <button>Cancel</button>
                </li>
                <li>
                    <button>Save</button>
                </li>
            </menu>
            <div>
                <p>
                    <label htmlFor="">Title</label>
                    <input/>
                </p>
                <p>
                    <label htmlFor="">Description</label>
                    <input/>
                </p>
                <p>
                    <label htmlFor="">Due date</label>
                    <input/>
                </p>
            </div>
        </div>
    )
}
