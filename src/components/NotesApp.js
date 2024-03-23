import { useState, useEffect } from "react";

import NoteInput from "./NoteInput";
import ActiveNoteList from "./ActiveNoteList";
import ArchivedNoteList from "./ArchivedNoteList";
import NoteSearch from "./NoteSearch";

import { getInitialData } from "../utils";




export default function NoteApp() {
    const data = getInitialData()

    const [notes, setNotes] = useState(data)
    const [activeNotes, setActiveNote] = useState()
    const [archive, setArchive] = useState()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [characterLeft, setCharacterLeft] = useState(50)


    useEffect(() => {
        const filteredActivenotes = notes.filter(note => note.archived !== true)
        setActiveNote(filteredActivenotes)

        const filteredArchivednotes = notes.filter(note => note.archived !== false)
        setArchive(filteredArchivednotes)
        // eslint-disable-next-line
    }, [notes])


    const onSearchHandler = (event) => {
        const search = new RegExp(event, 'gi')
        const filteredActiveNotes = notes.filter(note => note.title.match(search) && note.archived !== true)
        const filteredArchivedNotes = notes.filter(note => note.title.match(search) && note.archived !== false)
        setActiveNote(filteredActiveNotes)
        setArchive(filteredArchivedNotes)
    }

    const onAddNoteHandler = (event) => {
        event.preventDefault();
        setNotes(notes => [...notes,
        {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date()
        }
        ]);
    }

    const onTitleChange = (event) => {
        const titleLength = event.length
        const calculateCharacterLeft = Math.max(0, 50 - titleLength)
        setCharacterLeft(calculateCharacterLeft)
        setTitle(event.slice(0, 50))
      }

    const onDeleteHandler = (id) => {
        const filteredNotes = notes.filter(note => note.id !== id);
        setNotes(filteredNotes);
    }

    const onArchiveHandler = (id) => {
        notes.forEach((x, index) => {
            if (x.id === id) {
                const archived = notes[index].archived
                notes.splice(index, 1)
                setNotes([...notes, { ...x, archived: !archived }])
            }
        })
    }

    return (
        <>
            <div className="note-app__header">
                <h1>NotesApp</h1>
                <NoteSearch onSearchHandler={onSearchHandler}/>
            </div>
            <div className="note-app__body">
                <NoteInput 
                onSubmitEventHandler={onAddNoteHandler}
                title={title}
                characterLeft={characterLeft}
                body={body}
                onBodyChange={setBody}
                onTitleChange={onTitleChange} />
                <ActiveNoteList
                    activeNotes={activeNotes}
                    notes={activeNotes}
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler} />

                <ArchivedNoteList
                    archive={archive}
                    notes={archive}
                    onDelete={onDeleteHandler}
                    onArchive={onArchiveHandler} />
            </div>
        </>
    )
}