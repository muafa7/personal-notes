
export default function NoteSearch({onSearchHandler}) {
    return (<div className="note-search">
        <input type="text" placeholder="Find Note" onChange={(e)=> onSearchHandler(e.target.value)} />
    </div>);
}
