import notes from '../data/notesData.js';

let nextId = 1;

// GET all notes
export function getAllNotes(req, res) {
  res.json(notes);
}

// GET note by ID
export function getNoteById(req, res) {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  res.json(note);
}

// POST - Create new note
export function createNote(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content required' });
  }

  const createdAt = new Date().toISOString();

  const newNote = {
    id: nextId++,
    title,
    content,
    createdAt,
  };

  notes.push(newNote);
  res.status(201).json(newNote);
}

// PUT - Update note
export function updateNote(req, res) {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content required' });
  }

  note.title = title;
  note.content = content;

  res.json(note);
}

// DELETE
export function deleteNote(req, res) {
  const id = parseInt(req.params.id);
  const index = notes.findIndex(n => n.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Note not found' });
  }

  notes.splice(index, 1);

  res.json({ message: 'Note deleted successfully' });
}