export default function ArchiveButton({id,archived, onArchive}) {
    return (
    <>{archived === false?
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>:
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>Remove</button>
    }

    </>);
}
