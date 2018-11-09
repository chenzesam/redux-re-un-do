import { REDO_TYPE, UNDO_TYPE } from './type'

const actionCreator = {
  redo: function () {
    return {
      type: REDO_TYPE
    }
  },
  undo: function () {
    return {
      type: UNDO_TYPE
    }
  }
}

export default actionCreator