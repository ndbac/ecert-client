import Image from 'next/image'
import Placeholder1 from '../../public/images/placeholder1.png'
import Placeholder2 from '../../public/images/placeholder2.png'
import Placeholder3 from '../../public/images/placeholder3.png'
import ShadowLight7 from '../../public/elements/shadow-light-7.svg'
import PhotoWomen from '../../public/images/photo-women.png'
import { useFormik } from 'formik'
import { useDispatch, useSelector,  } from 'react-redux'
import { 
    AppDispatch,
    RootState
} from '../../redux/modules/common/common.interface'
import * as Yup from 'yup'
import { postCategory } from '../../redux/modules/category/slices/category.slice'
import { CategoryState } from '../../redux/modules/category/interfaces/category.interface'
import { useRouter } from 'next/router'
const formSchema = Yup.object({
    name: Yup.string().required('Please enter the category name!'),
    photoUrl: Yup.string()
        .url('Invalid url')
        .required('Please enter photo url!')
})

const CategoryCreator = () => {

    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues: {
            name: '',
            photoUrl: '',
            token: ''
        },
        onSubmit: (values) => {
            values.token = 'U2FsdGVkX18YG1CMtFG8GnFBHS3+TSMXU6ud62/lmncngPeFcOVDFLynJFtP7o362sWe5Uw6xQF06OFV/GdtTz50NKMn9RKA2yxqGqjdegjEH7Fmf/vXS0SpN1vu9u8WdeQUj181NTyn0j2mf9lKIxBF70q1Hxr9glTbd3SfRAiHqNttdv0gVSVbNNhkmbZm2fxJHuoyxFhEmDcYB7sjeNj7pgap6OBiFFHcweewwPo1JC8Ll/1gMc75v52ZL9I0t9mB4nvGmE2eE/Y9VMuaM9n7Hyi/KyRvNKWnm9ltwa9L2EtHBdPznH1WlOiZl/RbZPEMt3yyzia9ndSvp9ofKd3xIU+RhOhIYYUMWJnKMMw='
            if (values.token) {
                dispatch(postCategory(values))
            }
        },
        validationSchema: formSchema
    })
    const storeData = useSelector<RootState>(
        (store) => store.categoryReducer
    ) as CategoryState
    const {sent, loading, serverErr} = storeData
    const router = useRouter()
    if (sent) {
        router.push('/discovery')
    }
    return(
        <section className="relative pt-20 pb-48 bg-black overflow-hidden">
            <div className="relative z-10 md:pt-40 lg:pt-64 md:pb-40">
                <div className="hidden md:block absolute top-0 right-0 mt-40 -mr-32 h-128 clip-path-2 transform rotate-45">
                <div className="h-128 w-full transform -rotate-45 object-cover">
                    <Image src={Placeholder1} alt="" />
                </div>
                </div>
                <div className="relative container mx-auto px-4">
                <div className="hidden lg:block absolute -bottom-1/2 left-0 h-64 ml-40 -mb-24 clip-path transform rotate-45">
                    <div className="w-64 transform -rotate-45 object-cover">
                    <Image src={Placeholder2} alt="" />
                    </div>
                </div>
                <div className="relative z-10 max-w-md mx-auto text-center">
                    <h2 className="mb-4 text-4xl text-white font-heading">Create Your Own Category</h2>
                    <p className="mb-6 text-lg text-white md:text-gray-500">
                    Share your ideas to everyone!
                    </p>
                    <form >
                        {serverErr && (
                            <p className="mb-8 text-lg text-yellow-600 font-semibold text-center">
                            Missing fields!
                            </p>
                        )}   
                    <p className="mb-4 ml-6 text-yellow-600 font-semibold">
                        {' '}
                        {formik.touched.name && formik.errors.name}{' '}
                    </p>
                    <input
                        value={formik.values.name}
                        onChange={formik.handleChange('name')}
                        onBlur={formik.handleBlur('name')}
                        className="w-full mb-4 py-4 px-6 bg-black rounded-full border text-white outline-none placeholder-white"
                        type="name"
                        placeholder="Category name"
                    />
                    <p className="mb-4 ml-6 text-yellow-600 font-semibold">
                        {' '}
                        {formik.touched.photoUrl && formik.errors.photoUrl}{' '}
                    </p>
                    <div className="flex mb-6 py-4 px-6 bg-black rounded-full border text-white font-bold">
                        <input
                        value={formik.values.photoUrl}
                        onChange={formik.handleChange('photoUrl')}
                        onBlur={formik.handleBlur('photoUrl')}
                        className="w-full pr-4 bg-transparent outline-none placeholder-white"
                        type="url"
                        placeholder="Category photo url"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
                    >
                        {!loading && (
                        <svg
                            className="mr-3"
                            width="16"
                            height="9"
                            viewBox="0 0 16 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                            fill="black"
                            ></path>
                        </svg>
                        )}
                        <span className="text-sm font-medium font-heading">
                        {loading ? 'Loading' : 'Submit'}
                        </span>
                    </button>
                    </form>
                </div>
                <div className="hidden sm:block absolute top-1/2 right-0 -mr-52 transform -translate-y-1/2 object-contain">
                    <Image src={ShadowLight7} alt="" />
                </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 -ml-64 h-128 clip-path-2 transform rotate-45">
                <div className="h-128 w-full transform -rotate-45 object-cover">
                <Image src={Placeholder3} alt="" />
                </div>
            </div>
            <div className="hidden lg:block absolute top-0 left-1/2 h-64 clip-path-2 transform rotate-45">
                <div className="w-64 transform -rotate-45 object-cover">
                <Image src={PhotoWomen} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CategoryCreator