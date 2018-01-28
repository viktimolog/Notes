import React, {Component} from 'react';
import Masonry from 'react-masonry-css'
import Note from './Note.jsx';

// import './NotesGrid.css';

const masonryOptions = {
    columnWidth: 250,
    gutter:10,
    isFitWidth:true
};

export default class NotesGrid extends Component{

    componentDidMount(){
        this.msnry = new Masonry(this.grid, {
            columnWidth: 240,
            gutter: 10,
            isFitWidth: true
        }) ;
    }

    // componentDidUpdate(prevProps) {
    //     if(prevProps.notes!==this.props.notes){
    //         this.msnry.reloadItems();
    //         this.msnry.layout();
    //     }
    // }

    render(){
        const {
            notes,
            onNoteDelete
        }=this.props;

        return (
            <Masonry
                className='grid'
                options = {masonryOptions}
            >
                {
                    notes.map(note =>
                        <Note
                            key = {note.id}
                            id={note.id}
                            color= {note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}
