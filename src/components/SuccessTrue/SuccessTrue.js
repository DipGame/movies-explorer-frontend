import SuccessForm from '../SuccessForm/SuccessForm.js'
import okLable from '../../images/Ok.png'

function SuccessTrue(props) {

    return (
        <SuccessForm isActive={props.isActive} lable={okLable} title={'Успешно!'} />
    )
}

export default SuccessTrue;