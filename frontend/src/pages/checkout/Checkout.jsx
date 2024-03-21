import React, { useState } from "react";
import CheckoutCart from "./CheckoutCart";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { extractErrorMessage } from "../../utils/helper";
import api from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { clearCart } from "../../redux/slicers/cartSlice";
import { useNavigate } from "react-router-dom";
import SuccessCheckOutModal from "../../components/SuccessCheckOutModal";
import useModal from "../../hooks/useModal";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const { cart } = useSelector((state) => state.cartState);
  const { user } = useSelector((state) => state.userState);
  const { token } = useSelector((state) => state.tokenState);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { setChildren, toggleModal, setPosition } = useModal();

  const formik = useFormik({
    initialValues: {
      email: user.email,
      firstName: user.username,
      lastName: "",
      phone: "",
      city: "",
      shippingAddress: "",
      postalCode: "",
      area: "",
    },
    validationSchema: () =>
      Yup.object({
        email: Yup.string().email("Invalid Email").required("Required*"),
        firstName: Yup.string().required("Required*"),
        lastName: Yup.string().required("Required*"),
        phone: Yup.string()
          .matches(
            /^(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Phone number must be in a valid format"
          )
          .min(10, "Must be at least 10 digits")
          .required("Required*"),
        city: Yup.string().required("Required*"),
        shippingAddress: Yup.string().required("Required*"),
        postalCode: Yup.string().required("Required*"),
        area: Yup.string().required("Required*"),
      }),
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const { status } = await api.post(
          "/checkout/purchase",
          {
            info: values,
            cart,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(status);
        if (status === 200) {
          toast.success("Order placed successfully");

          // dispatch(clearCart());
          toggleModal(true);
          setPosition(true);
          setChildren(<SuccessCheckOutModal navigator={navigator} />);
        }
        setLoading(false);
      } catch (error) {
        if (error?.response) {
          toast.error(
            extractErrorMessage(error.response.data.message) ||
              "An error occurred"
          );
        } else {
          toast.error("Please check your connection");
        }
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex flex-col  min-h-[180vh] justify-center lg:flex-row mt-[84px] lg:mt-[92px] max-w-[1296px] mx-auto">
      <div className="w-full bg-white-400 p-2 ">
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-firstName"
                >
                  First Name
                </label>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500">{formik.errors.firstName}</div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.firstName && formik.errors.firstName
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-firstName"
                type="tel"
                placeholder="John"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-lastName"
                >
                  Last Name
                </label>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500">{formik.errors.lastName}</div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.lastName && formik.errors.lastName
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-lastName"
                type="tel"
                placeholder="Doe"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-3">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-email"
                >
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-email"
                type="tel"
                placeholder="Phone Number"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-3">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-phone"
                >
                  Phone
                </label>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500">{formik.errors.phone}</div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-phone"
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-city"
                >
                  City
                </label>
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500">{formik.errors.city}</div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.city && formik.errors.city
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-city"
                type="text"
                placeholder="Eg. Nairobi"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-state"
                >
                  Area
                </label>
                {formik.touched.area && formik.errors.area ? (
                  <div className="text-red-500">{formik.errors.area}</div>
                ) : null}
              </div>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="area"
                  value={formik.values.area}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Select</option> {/* Better default */}
                  <option value="Lavington">Lavington</option>
                  <option value="South B">South B</option>
                  <option value="Kilimani">Kilimani</option>
                  <option value="Kileleshwa">Kileleshwa</option>
                  <option value="Langata">Langata</option>
                  <option value="Loresho">Loresho</option>
                  <option value="Westlands">Westlands</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FaAngleDown />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <div className="flex justify-between items-center relative">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold mb-2"
                  htmlFor="grid-postalCode"
                >
                  Postal Code
                </label>
                {formik.touched.postalCode && formik.errors.postalCode ? (
                  <div className="text-red-500 absolute -right-4 -top-[1.5px]">
                    {formik.errors.postalCode}
                  </div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.postalCode && formik.errors.postalCode
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-postalCode"
                type="tel"
                placeholder="00100"
                name="postalCode"
                value={formik.values.postalCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full  px-3 ">
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block uppercase tracking-wide text-black text-s font-bold "
                  htmlFor="grid-shippingAddress"
                >
                  Address
                </label>
                {formik.touched.shippingAddress &&
                formik.errors.shippingAddress ? (
                  <div className="text-red-500">
                    {formik.errors.shippingAddress}
                  </div>
                ) : null}
              </div>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  formik.touched.shippingAddress &&
                  formik.errors.shippingAddress
                    ? "border-red-500"
                    : "border-gray-200"
                }`}
                id="grid-shippingAddress"
                type="text"
                placeholder="Eg. Ole Shapara Avenue."
                name="shippingAddress"
                value={formik.values.shippingAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="flex items-center justify-center pb-5">
            <button
              disabled={cart.length === 0 || loading}
              type="submit"
              className="py-2 px-36 font-medium bg-green-500 disabled:bg-green-200 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none disabled:shadow-[3px_3px_0px_black] disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 hover:translate-x-[3px] hover:translate-y-[3px]"
            >
              {loading ? "Loading..." : "Complete Order"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-full bg-gray-100 flex items-start lg:justify-center ">
        <CheckoutCart />
      </div>
    </div>
  );
};

export default Checkout;
