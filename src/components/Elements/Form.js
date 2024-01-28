const Form = () => {
    return ( 
        <form className='bg-[#A20405] p-4 mt-[50px]  '>
                        <h2 className='text-2xl font-bold mb-4 text-white'>Find Your Perfect Match Here!</h2>

                        {/* Name Input with required attribute */}
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-white text-sm font-semibold mb-2'>
                                Name:
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='w-full p-2 border-none rounded-md text-black '
                                required
                            />
                        </div>

                        {/* Email and Phone Number Fields (side by side) with required and pattern attributes */}
                        <div className='flex mb-4'>
                            <div className='flex-1 mr-2'>
                                <label htmlFor='email' className='block text-white text-sm font-semibold mb-2'>
                                    Email:
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className='w-full p-2 border border-gray-300 rounded-md  text-black'
                                    required
                                />
                            </div>
                            <div className='flex-1 ml-2'>
                                <label htmlFor='phone' className='block text-white text-sm font-semibold mb-2'>
                                    Phone Number:
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    className='w-full p-2 border border-gray-300 rounded-md text-black'
                                    pattern='[0-9]{10}'  // Validating 10-digit phone number
                                    required
                                />
                            </div>
                        </div>

                        {/* Dropdowns (side by side) */}
                        <div className='flex mb-4'>
                            <div className='flex-1 mr-2'>
                                <label htmlFor='dropdown1' className='block text-white text-sm font-semibold mb-2'>
                                    Select Seeking Match *
                                </label>
                                <select
                                    id='dropdown1'
                                    name='dropdown1'
                                    className='w-full p-2 border border-gray-300 rounded-md text-black'
                                    required
                                >
                                    <option value=''>Select</option>
                                    <option value='option1'>Daughter</option>
                                    <option value='son'>Son</option>
                                    <option value='brother'>Brother</option>
                                    <option value='sister'>Sister</option>
                                    <option value='myself'>Myself</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>
                            <div className='flex-1 ml-2'>
                                <label htmlFor='dropdown2' className='block text-white text-sm font-semibold mb-2'>
                                    Select Martial Status *
                                </label>
                                <select
                                    id='dropdown2'
                                    name='dropdown2'
                                    className='w-full p-2 border border-gray-300  text-black rounded-md '
                                    required
                                >
                                    <option value=''>Select</option>
                                    <option value='single'>Single</option>
                                    <option value='widow'>Widow</option>
                                    <option value='divorced'>Divorced</option>
                                </select>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button
                            type='submit'
                            className='bg-[#FFFFFF] text-[#A20405] px-2 py-2 w-full rounded  '
                        >
                            Register
                        </button>
                    </form>
     );
}
 
export default Form;