import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

export default function Board() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    return (
        <DragDropContext>
            <h2 style={{ teztAlign: 'center' }}>Progress Board</h2>

            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            ></div>

        </DragDropContext>
    );
}