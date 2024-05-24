import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../EditBook/EditBook.css";

const EditBook = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState([
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
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    formik.setValues(editData);
  }, [editData]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://664aea64a300e8795d43675e.mockapi.io/api/book/${id}`
      );
      setEditData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      title: editData.title,
      author: editData.author,
      ISBN_number: editData.ISBN_number,
      publication_data: editData.publication_data,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://664aea64a300e8795d43675e.mockapi.io/api/book/${id}`,
          {
            title: values.title,
            author: values.author,
            ISBN_number: values.ISBN_number,
            publication_data: values.publication_data,
          }
        );
        navigate("/books");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="edit-form">
      <h2 className="poppins-light text-center mb-4 edit_title">Edit Book</h2>
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
                      </div>
                      {/* button */}
                      <button
                        className="btn btn-success text-center"
                        type="submit"
                      >
                        Update
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

export default EditBook;
