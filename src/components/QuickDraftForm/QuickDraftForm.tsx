import * as yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import MainButton from "../MainButton/MainButton";

const QuickDraftForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        message: "",
      }}
      validationSchema={yup.object({
        title: yup.string().required(),
        message: yup.string().required(),
      })}
      onSubmit={(values, action) => {
        setTimeout(() => {
          toast.success("Success Notification !", {
            theme: "dark",
          });
          action.resetForm();
        }, 500);
      }}
    >
      {({ handleSubmit, getFieldProps, errors, touched, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Title"
              aria-label="title"
              className="shadow-none"
              {...getFieldProps("title")}
              isInvalid={!!errors.title && !!touched.title}
            />

            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Your Message"
              aria-label="your message"
              className="shadow-none"
              {...getFieldProps("message")}
              isInvalid={!!errors.message && !!touched.message}
            />

            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <MainButton className="d-block" type="submit" disabled={isSubmitting}>
            Save
          </MainButton>
        </Form>
      )}
    </Formik>
  );
};

export default QuickDraftForm;
