import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import './Notes.css';

class Note extends Component{
    static propTypes={
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,//текст заметки, node - все, что может быть внутри тега
        onDelete: PropTypes.func.isRequired
    }
    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.onDelete(this.props.id);
    }
    render()  {
        const {
            color,
            children,
            onDelete
        }=this.props;

        return (
            <div className="note" style={{ backgroundColor: color}}>
                <span className="note__delete-icon" onClick={this.handleDelete}> X </span>
                {children}
            </div>
        );
    }
}

export default Note;