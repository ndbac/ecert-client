import Image from 'next/image'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import ShadowLight7 from '../../../public/elements/shadow-light-7.svg'


function Search() {
    const formSchema = Yup.object({
        searchText: Yup.string()
          .required('Please enter to search'),
      })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            searchText: ''
        },
        onSubmit: (values) => {
          router.push(`/search/${values.searchText}`)
        },
        validationSchema: formSchema,
    })

    return (
        <section className="relative bg-black overflow-hidden">
        <div className="relative w-2/3 ml-auto">
            <div className="absolute top-1/2 left-0 mt-40 rounded-full h-20 md:h-160 w-80 md:w-160">
            <Image
                className="object-contain transform scale-200"
                src={ShadowLight7}
                alt=""
            />
            </div>
        </div>
        <div className="relative container mx-auto px-4 pb-12">
            <div className="flex flex-wrap mx-4">
            <div className="w-full px-4 ">
                <div className="md:max-w-md mx-auto">
                <p className="mb-20 max-w-sm sm:text-xl font-semibold text-center text-white">
                    Find what you want here
                </p>
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex px-8 py-4 bg-black rounded-full border border-white"
                >
                    <input
                    value={formik.values.searchText}
                    onChange={formik.handleChange('searchText')}
                    onBlur={formik.handleBlur('searchText')}
                    className="w-full pr-4 bg-transparent text-white placeholder-white outline-none"
                    type="text"
                    placeholder="Search..."
                    defaultValue=""
                    />
                    <button
                    type="submit"
                    className="flex items-center text-yellow-300 hover:text-yellow-400"
                    >
                    <svg
                        className="mt-1"
                        width="16"
                        height="8"
                        viewBox="0 0 16 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M12.01 3H0V5H12.01V8L16 4L12.01 0V3Z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Search
