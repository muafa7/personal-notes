import NoteList from "./NoteList";

export default function ActiveNoteList({notes, activeNotes, onDelete, onArchive}) {
    return(
    <>
    <h2>Active Note</h2>
    {activeNotes?.length === 0?
    <p className="notes-list__empty-message">No Notes</p>:
        <NoteList notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        /> }
    </>);
}