import ShadowBlueFull from "../../public/elements/shadow-blue-full.svg";
import Image from "next/image";
import Map from "../../public/images/map1.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch} from "react-redux";
import { EEmailOption, EEmailType } from "../../redux/modules/notification/interfaces/notification.interface";
import { userSubscribeForNews } from "../../redux/modules/notification/slices/notification.slice";
import { AppDispatch} from "../../redux/modules/common/common.interface";
import { DEFAULT_EMAIL_ADDRESS, USER_EMAIL_HELP} from "../../utils/defaultValues";

const formSchema = Yup.object({
  firstName: Yup.string()
    .max(20, "Your first name must be lower than 30 characters")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .max(20, "Your last name must be lower than 30 characters")
    .required("Please enter your last name"),
  from: Yup.string()
    .email("Your email is not valid")
    .required("Please enter your email address"),
  text: Yup.string()
    .required("Please enter your message")
});

function Contact() {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      from: "",
      text: ""
    },
    onSubmit: (values) => {
        const message:string = `From ${values.firstName} ${values.lastName}: ${values.text}`
        console.log(message);
        const data = {
          from : values.from,
          to: DEFAULT_EMAIL_ADDRESS,
          subject: USER_EMAIL_HELP,
          text: message,
          option: EEmailOption.TEXT,
          type: EEmailType.NOTIFICATION,
        }
        dispatch(userSubscribeForNews(data));
    },
    validationSchema: formSchema,
  });
    return (
      <section className=" pt-20 bg-black ">
            <div className="flex px-6 md:px-12 flex-wrap items-center justify-center">
              <div className="m-auto">
              <div className="text-center px-4 relative pb-10">
                  <div className="text-5xl text-yellow-400 pb-3">Contact Us</div>
                  <div className="text-white md:text-gray-500 text-xl">We are here to help and answer any question you might have. We love forward to hearing from you</div>
                  <div className="absolute lg:-top-20 left-1/2 -translate-x-1/2 -top-20 w-96">
                    <Image src={ShadowBlueFull} alt="" />
                  </div>
              </div>
                <form onSubmit={formik.handleSubmit} className="px-4 pt-4">
                  <div className="text-white text-3xl text-center pt-6 pb-10 font-semibold">Send us a message!</div>
                  <div>
                    <div className="flex flex-wrap justify-between">
                      <div className="w-full lg:w-auto pr-2">
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">First Name:  </div>
                        <input type="text" className="w-full lg:w-96 mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" 
                        placeholder="First name" 
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value = {formik.values.firstName}
                        onBlur = {formik.handleBlur}/>
                      <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.firstName && formik.errors.firstName} </p>
                      </div>
                      <div className="w-full lg:w-auto pl-2">
                        <div className="text-lg text-white md:text-gray-500 pl-4 pb-2">Last Name: </div>
                        <input type="text" className="w-full lg:w-96 mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" 
                        placeholder="Last name" 
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        value = {formik.values.lastName}
                        onBlur = {formik.handleBlur}/>
                      <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.lastName && formik.errors.lastName} </p>
                      </div>
                    </div>
                    <div>
                        <label className="text-lg text-white md:text-gray-500 pl-4 pb-2" htmlFor="email">Email: </label>
                        <input type="text" className="w-full mb-4 py-4 px-10 bg-black rounded-full border text-white outline-none placeholder-white" 
                        placeholder="Enter your email" 
                        id="from"
                        name="from"
                        onChange={formik.handleChange}
                        value = {formik.values.from}
                        onBlur = {formik.handleBlur}
                        />
                         <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.from && formik.errors.from}</p>
                    </div>
                    <div>
                        <label className="text-lg text-white md:text-gray-500 pl-4 pb-2" htmlFor="text">Additional Details: </label>
                        <textarea className="w-full mb-4 py-4 px-10 bg-black rounded-md border text-white outline-none placeholder-white" 
                            placeholder="What can we help you with?" 
                            id="text"
                            name="text"
                            onChange={formik.handleChange}
                            value = {formik.values.text}
                            onBlur = {formik.handleBlur}/>
                        <p className="mb-2 ml-6 text-yellow-600 font-semibold"> {formik.touched.text && formik.errors.text} </p>
                    </div>
                    <div className="pt-6">
                        <button type="submit" className="px-6 py-4 text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded transition duration-200">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
              <div className="text-center pt-20 relative">
                <Image className="h-full w-full object-fit" src={Map} alt="map"/>
                <div className="absolute top-1/2 -translate-y-1/2 right-1/2 py-6 px-6 bg-black border overflow-hidden">
                  <div className="md:block hidden">
                        <h3 className="mb-1 text-xs text-gray-500 font-semibold uppercase tracking-widest">Address</h3>
                        <p className="mb-2 text-xs text-white">B1, Bach Khoa, Ha Noi</p>
                        <h3 className="mb-1 text-xs text-gray-500 font-semibold uppercase tracking-widest">Contacts</h3>
                        <p className="text-xs text-white">hello@shuffle.dev</p>
                        <p className="text-xs text-white">+7 843 672 431</p>

            </div>
          </div>
              </div>
      </section>
    )
  }
  
  export default Contact
