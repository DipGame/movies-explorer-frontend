import SuccessForm from '../SuccessForm/SuccessForm.js'
import NoOkLable from '../../images/noOk.png'

function SuccessFalse(props) {

    return (
        <>
            <SuccessForm isActive={props.isActive} lable={NoOkLable} title={'Что то пошло не так...'} />
        </>
    )
}

export default SuccessFalse;