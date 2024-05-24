import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreateAuthor = () => {
  const navigate = useNavigate();
  const [createAuthor, setcreateAuthor] = useState([
    {
      name: "",
      dob: "",
      biography: "",
    },
  ]);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    dob: Yup.string().required("date of birth is Required"),
    biography: Yup.string().required("biograpgy Required"),
  });
  const formik = useFormik({
    initialValues: { createAuthor },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(
          `https://665078d1ec9b4a4a6032344e.mockapi.io/api/author`,
          values
        );
        navigate("/author");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="edit-form">
      <h2 className="poppins-light text-center mb-4 edit_title">Add Author</h2>
      <section className="intro" style={{ width: "100%" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card">
                  <div className="card-body p-4 p-md-5">
                    <form onSubmit={formik.handleSubmit}>
                      {/* name */}
                      <h6 className="poppins-light">Name:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formik.values.name}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.name && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.name}
                          </div>
                        )}
                      </div>
                      {/* name */}
                      <h6 className="poppins-light">Date Of Birth:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="dob"
                          className="form-control"
                          value={formik.values.dob}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.dob && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.dob}
                          </div>
                        )}
                      </div>
                      {/* name */}
                      <h6 className="poppins-light">BioGraphy:</h6>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          name="biography"
                          className="form-control"
                          value={formik.values.biography}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.biography && (
                          <div className="error" style={{ color: "red" }}>
                            {formik.errors.biography}
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

export default CreateAuthor;
