import { FormContainer } from "../styled-components/form.styled";
import { Formik } from "formik";
import { useState } from "react";

const ContactForm = () => {
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: "",
          email: "",
          coments: "",
        }}
        validate={(values) => {
          let errors = {};

          //name validation
          if (!values.name) {
            errors.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "You name only can take letters and spaces";
          }

          //email validation
          if (!values.email) {
            errors.email = "Please write your email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email = "The email only has @ and letters";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          fetch("https://formsubmit.co/ajax/marcos.martilotta@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              message: values.coments,
            }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

          resetForm();
          setMyForm(true);
          setTimeout(() => setMyForm(false), 5000);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          handleBlur,
          errors,
          touched,
        }) => (
          <ContactStyled onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name and surname</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Johan Hertz"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="coments">Coments</label>
              <textarea
                name="coments"
                cols="30"
                rows="10"
                id="coments"
                type="text"
                placeholder="Hello i am... "
                value={values.coments}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Send</button>
              {myForm && <p>"Succes" your form has been send</p>}
            </div>
          </ContactStyled>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ContactForm;
