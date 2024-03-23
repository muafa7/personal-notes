import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import ItemContent from './ItemContent';

export default function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <ItemContent title={title} createdAt={createdAt} body={body}/>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
            </div>
        </div>
    );
}
