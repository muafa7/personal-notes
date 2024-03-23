import NoteList from "./NoteList";

export default function ArchivedNoteList({notes, archive, onDelete, onArchive}) {
    return(
    <>
    <h2>Archive</h2>
    {archive?.length === 0?
    <p className="notes-list__empty-message">No Notes</p>:
    <NoteList notes={notes}
    onDelete={onDelete}
    onArchive={onArchive}/>
    }
    </>);
}