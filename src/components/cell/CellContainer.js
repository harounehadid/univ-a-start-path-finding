import Cell from './Cell';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell, updateCell, updateCellPosition } from '../field/fieldSlice';
import { selectCellTypesArray, substractCellUnit } from '../../features/cell-types/cellTypesSlice';
import typeSelector from '../../features/type-selector/typeSelector';

const CellContainer = props => {
    const { id } = props;

    const dispatch = useDispatch();
    const ref = useRef();

    // Launch needed code after first time component creations >>>>>>>>>>>>>>>>>
    const cellTypesData = useSelector(selectCellTypesArray);
    useEffect(() => {
      const cellType = typeSelector(cellTypesData);
      dispatch(substractCellUnit({typeName: cellType.name}))
      dispatch(updateCell({cellType, id}));
    }, []);
    // -----------------------------------------------------
  
    // This function calculate X and Y cordinates of the center of the element >>>>>>>>>>>>>>>
    const getCenterCords = () => {
      // Getting the x and y cordinations of element's edges
      const rect = ref.current.getBoundingClientRect();

      // Formula: ((right - left) / 4) + left
      const xCord = ((rect.right - rect.left) / 4) + rect.left;

      // Formula: ((bottom - top) / 4) + top 
      const yCord = ((rect.bottom - rect.top) / 4) + rect.top;

      return {x: xCord, y: yCord};
    };

    const updateData = () => {
      const pos = getCenterCords();
      dispatch(updateCellPosition({id, pos}));
    }

    useEffect(() => {
      window.addEventListener('resize', updateData);

      updateData();
  
      return () => {
        window.removeEventListener('resize', updateData);
      };
    }, []);
    // -------------------------------------------------------

    const cellData = useSelector(state => selectCell(state, id));

    return (
      <div ref={ref}>
        <Cell rep={cellData.representation} name={cellData.type} />
        {/* <Cell rep={cellTypes.empty.representation} /> */}
      </div>
    );
}

export default CellContainer;
