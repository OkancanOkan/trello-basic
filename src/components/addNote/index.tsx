import React, { useState } from 'react';
import './addnote.css';
import Input from '../input';
import TextArea from '../textArea';
import Button from '../button';
export interface NoteItemProps {
  id: number;
  title: string;
  description: string;
  date: Date;
}

interface AddNoteButtonProps {
  onAddNote: (note: NoteItemProps) => void;
}

const AddNote: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    if (title && description) {
      const newNote: NoteItemProps = {
        id: new Date().getTime(),
        title: title,
        description: description,
        date: new Date(),
      };

      onAddNote(newNote);
      setTitle('');
      setDescription('');
      setShowForm(false);
    }
  };

  return (
    <div className="styled-addNote">
      {showForm ? (
        <div className="styled-addNote-inputs">
          <Input label="Title" maxWidth value={title} onChange={setTitle} />
          <TextArea
            label="Description"
            value={description}
            onChange={setDescription}
            maxWidth
          />
          <div className="styled-addNote-buttons">
            <Button onClick={handleAddNote} label="Add Note" />
            <Button onClick={() => setShowForm(false)} label="Cancel" />
          </div>
        </div>
      ) : (
        <button
          className="styled-addNote-addNew"
          onClick={() => setShowForm(true)}
        >
          <span className="styled-addNote-addNew-icon" />
          <label className="styled-addNote-addNew-label">Add New Note</label>
        </button>
      )}
    </div>
  );
};

export default AddNote;
