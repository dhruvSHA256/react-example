import { useState } from "react"

function AddTask({ onAdd }) {

    const [text, setText] = useState("")
    const [remainder, setRemainder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("Please enter task name")
            return;
        }
        onAdd({ name: text, remainder: remainder })
        setText("")
        setRemainder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Remainder </label>
                <input type="checkbox"
                    checked={remainder}
                    value={remainder}
                    onChange={(e) => { setRemainder(e.currentTarget.checked) }}
                />
            </div>
            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
