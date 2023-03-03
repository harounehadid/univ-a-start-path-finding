import { useDispatch } from "react-redux";
import FormInput from "../../components/form-input/FormInput";
import { setFieldDimensions } from "./fieldDimensionsSlice";
import styles from './fieldDimensionsController.module.css';

const FieldDimensionsController = () => {
    const dispatch = useDispatch();
  
    const handleClick = (event) => {
        event.preventDefault();
        
        // Convert the data sent from the form into an object of key value pairs
        const data = Object.fromEntries(new FormData(event.target).entries());

        dispatch(setFieldDimensions(data));
    }
  
    return (
        <form className={styles['container']} onSubmit={handleClick}>
            <FormInput labelText={'X'} type={'number'} id={'x'} name={'x'} minVal={2} />
            <FormInput labelText={'Y'} type={'number'} id={'y'} name={'y'} minVal={2} />
            <button type='submit' value='submit'>Generate</button>
      </form>
    );
}

export default FieldDimensionsController;
