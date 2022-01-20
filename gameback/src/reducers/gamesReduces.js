import { LIST, CHANGE_COLUMN_FRONTEND, CHANGE_ORDER_FRONTEND } from "../types/index"

export default function gamesReducer (state={},action){
    switch(action.type){
        case LIST :{

            return {gamesUser:action.payload}
        }

        case CHANGE_COLUMN_FRONTEND:{
           console.log('Cambiando en el frontend')
            const {source,destination} = action.payload
            const sourceColumn = state.gamesUser.games[source.droppableId];
            const destColumn = state.gamesUser.games[destination.droppableId];
            const [removed] = sourceColumn.splice(source.index,1)
            destColumn.splice(destination.index, 0, removed);
            const newState = {
                games: {...state.gamesUser.games,
                    [source.droppableId] : sourceColumn,
                    [destination.droppableId] : destColumn
                }
            }
            return {gamesUser:newState}
            
           
        }

        case CHANGE_ORDER_FRONTEND:{
            const {source,destination} = action.payload
            const column = state.gamesUser.games[source.droppableId];
            const [removed] = column.splice(source.index, 1);
            column.splice(destination.index,0,removed)
            const newState = {
                game:{...state.gamesUser.games,
                [source.droppableId]:column}
            }
          
            return {gamesUser:newState}
        }
        
        default:
            return state
                
    }
}