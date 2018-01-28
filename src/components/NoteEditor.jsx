import React, {Component} from 'react';

// import './NotesEditor.css';

export default class NoteEditor extends Component{

    constructor() {
        super();
        this.handleTextChange = this.handleTextChange.bind(this);//вместо синтаксиса handleTextChange=(event)=>
        this.handleNoteAdd = this.handleNoteAdd.bind(this);

    }
        state={
            text: ''
        }


    handleTextChange(event){
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd(){
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: 'yellow'
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    }

    resetState(){
        this.setState({
            text: ''
        });
    }

    render()  {
        return (
            <div className="editor">
        <textarea
            rows={5}
            placeholder="Enter your note here..."
            className="editor__textarea"
            value={this.state.text}
            onChange={this.handleTextChange}
        />

                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
}

