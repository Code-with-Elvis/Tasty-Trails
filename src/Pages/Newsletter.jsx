import axios from 'axios'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

const url = 'https://port-mail-service.onrender.com/contact/'

export const action = async ({ request }) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    await axios.post(url, data) // Ensure to await the post request
    toast.success('Form submitted successfully')
    return redirect('/') // Correct the path for the redirection
  } catch (error) {
    toast.error('Something went wrong')
    return null // Return a value in the catch block
  }
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <section className="container-t min-h-[90vh]">
      <Form
        method="POST"
        className="max-w-[500px] border-[1.5px] px-8 py-12 border-yellow-600 mx-auto mt-20 text-sm font-medium text-[#333] text-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border-[1.5px] border-yellow-800 px-5 py-2.5 w-full mb-4 inline-block"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border-[1.5px] border-yellow-800 px-5 py-2.5 w-full mb-4 inline-block"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border-[1.5px] border-yellow-800 px-5 py-2.5 w-full mb-4 inline-block h-32"
          required
        ></textarea>
        <button
          className="bg-green-700 text-white py-2.5 px-16 font-serif disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </section>
  )
}
export default Newsletter
