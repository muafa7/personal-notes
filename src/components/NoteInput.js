export default function NoteInput({title, characterLeft, body, onSubmitEventHandler, onTitleChange, onBodyChange}) {
// const [title, setTitle] = useState("")
// const [body, setBody] = useState("")
// const [characterLeft, setCharacterLeft] = useState(50)

// const onTitleChange = (event) => {
//   const titleLength = event.length
//   const calculateCharacterLeft = Math.max(0, 50 - titleLength)
//   setCharacterLeft(calculateCharacterLeft)
//   setTitle(event.slice(0, 50))
// }

// const onSubmitEventHandler = (event) => {
//     event.preventDefault();
//     addNote({title, body})
//   }

    return (
    <div className="note-input">
      <h2>Add Note</h2>
      <form onSubmit={onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Character left: {characterLeft}</p>
          <input className="note-input__title" type="text" placeholder="Title" value={title} onChange={(e)=> onTitleChange(e.target.value)} required="" />
          <textarea className="note-input__body" type="text" placeholder="Note" value={body} onChange={(e)=> onBodyChange(e.target.value)} required=""></textarea>
          <button type="submit">Add</button>
      </form>
    </div>
    );
}
