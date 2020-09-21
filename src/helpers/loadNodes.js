import { db } from '../firebase/firebaseConfig'

export const loadNotes = async ( uid ) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get()
    const notes = []

    notesSnap.forEach( item => {
        notes.push({
            id: item.id,
            ...item.data()
        })
    })
    return notes
}