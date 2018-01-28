import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NotesGrid from './components/NotesGrid.jsx';
import NoteEditor from './components/NoteEditor.jsx';

class App extends Component {

    constructor(){
        super();
        this.state = {
            notes:[]
        }
    }

    componentDidMount()
    {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
        if (savedNotes) {
            this.setState({notes: savedNotes});
        }
    }

    componentDidUpdate(prevProps, prevState)
    {
        if (prevState.notes !== this.state.notes) {
            this.saveToLocalStorage();
        }
    }

    handleNoteAdd = (newNote) => {
        this.setState({
            notes: [newNote, ...this.state.notes]
        }, this.saveToLocalStorage);
    }

    saveToLocalStorage()
    {
        const notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNoteDelete = (noteId)=>{
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    }

    render()
    {
        return (
            <div className="app">
                <h2 className="app_header">NotesApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd}/>

                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}

export default App;


