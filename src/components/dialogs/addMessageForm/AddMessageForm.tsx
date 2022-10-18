import {Button} from "antd";
import s from './AddMessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FC} from "react";
import {Textarea} from "../../common/form/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validator/validators";

type DialogsFormPropsType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50);
const AddMessageForm: FC<InjectedFormProps<DialogsFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.container}>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message'}
                       row={3}
                />
                <div>
                    <Button type={'default'} shape={'round'} htmlType={'submit'}>Send</Button>
                </div>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<DialogsFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)