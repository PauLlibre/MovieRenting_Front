import React from "react";
import "./Login.scss";
import { useState, useEffect } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router";
import { validateLoginFormValues } from "../../helpers/form-utilities";
import TokenStorageService from "../../services/TokenStorageService";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../features/login/loginSlice";
import { logUser } from "../../features/userData/userDataSlice";

export default function Login() {
  const dispatch = useDispatch();

  const userName = "";

  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };

    if (Object.keys(formErrors).length == 0 && isSubmit) {
      loginNow(credentials);
    }
  }, [formErrors]);

  const navigate = useNavigate();

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormValues({
      ...formValues,

      [name]: value,
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setFormErrors(validateLoginFormValues(formValues));
    setIsSubmit(true);
  };

  const loginNow = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      TokenStorageService.saveToken(res.data.token);
      console.log(res.data.role);
      dispatch(checkLogin());
      dispatch(logUser(res.data));

      switch (res.data.role) {
        case "user":
          return navigate("/movies");
        case "admin":
          return navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-root">
      <form onSubmit={handleSubmit} noValidate>
        <div className="name">
          <label>EMAIL</label>
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <div className="mail-error">{formErrors.email}</div>
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <div className="mail-error">{formErrors.password}</div>
        </div>
        <button>LOGIN</button>
      </form>
    </div>
  );
}
