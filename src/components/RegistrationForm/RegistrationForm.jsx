import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Please, fill valid email")
    .required("Required"),
  birthDate: Yup.string().required("Required"),
  infoEvent: Yup.string().required("Required"),
});

export default function RegistrationForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      birthDate: values.birthDate,
      infoEvent: values.infoEvent,
    };
    onAdd(newValues);
    // console.log(newValues);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        birthDate: "",
        infoEvent: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.labelFormInput}>
          Full name
          <Field className={css.formInput} type="text" name="name" />
          <ErrorMessage className={css.erros} name="name" component="span" />
        </label>
        <label className={css.labelFormInput}>
          Email
          <Field className={css.formInput} type="email" name="email" />
          <ErrorMessage className={css.erros} name="email" component="span" />
        </label>
        <label className={css.labelFormInput}>
          Date of birth
          <Field className={css.formInput} type="date" name="birthDate" />
          <ErrorMessage
            className={css.erros}
            name="birthDate"
            component="span"
          />
        </label>
        <fieldset className={css.wrapRadio}>
          <legend className={css.radioName}>
            Where did you hear about this event?
          </legend>
          <label className={css.labelRadio}>
            <Field
              className={css.radio}
              type="radio"
              name="infoEvent"
              value="socialMedia"
            />
            Social media
          </label>
          <label className={css.labelRadio}>
            <Field
              className={css.radio}
              type="radio"
              name="infoEvent"
              value="friens"
            />
            Friends
          </label>
          <label className={css.labelRadio}>
            <Field
              className={css.radio}
              type="radio"
              name="infoEvent"
              value="foundMyself"
            />
            Found myself
          </label>
          <ErrorMessage
            className={css.erros}
            name="infoEvent"
            component="span"
          />
        </fieldset>
        <button className={css.button} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
