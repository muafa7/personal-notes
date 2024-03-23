export default function DeleteButton({id, onDelete}) {
    return (<button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>);
}
