import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateBook = () => {
  const navigate = useNavigate();
  const [createData, SetCreateData] = useState([
    {
      title: "",
      author: "",
      ISBN_number: "",
      publication_data: "",
    },
  ]);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    author: Yup.string().required("Author is Required"),
    ISBN_number: Yup.string().required("ISBN Numberis Required"),
    publication_data: Yup.string().required("Publication Data is Required"),
  });
  const formik = useFormik({
    initialValues: { createData },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(
          `https://664aea64a300e8795d43675e.mockapi.io/api/book`,
          values
        );
        navigate("/books");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="edit-form">
      <h2 className="poppins-light text-center mb-4 edit_title">Add Book</h2>
      <section className="intro" style={{ width: "100%" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card">
                  <div className="card-body p-4 p-md-5">
                    <form onSubmit={formik.handleSubmit}>
                      {/* Title */}
                      <h6 className="poppins-light">Title:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={formik.values.title}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.title && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.title}
                          </div>
                        )}
                      </div>
                      {/* Author */}
                      <h6 className="poppins-light">Author:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="author"
                          className="form-control"
                          value={formik.values.author}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.author && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.author}
                          </div>
                        )}
                      </div>
                      {/* ISBN Number */}
                      <h6 className="poppins-light">ISBN Number:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="ISBN_number"
                          className="form-control"
                          value={formik.values.ISBN_number}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.ISBN_number && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.ISBN_number}
                          </div>
                        )}
                      </div>
                      {/* Publication Data */}
                      <h6 className="poppins-light">Publication Data:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="publication_data"
                          className="form-control"
                          value={formik.values.publication_data}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.publication_data && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.publication_data}
                          </div>
                        )}
                      </div>
                      {/* button */}
                      <button
                        className="btn btn-success text-center"
                        type="submit"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBook;
