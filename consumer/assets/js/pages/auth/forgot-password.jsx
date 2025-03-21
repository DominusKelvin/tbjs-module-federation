import { Link, Head, useForm } from '@inertiajs/react'
import InputEmail from 'federation_provider/components/InputEmail'
import InputButton from 'federation_provider/components/InputButton'
import { useMemo } from 'react'

export default function ForgotPassword() {
  const { data, setData, ...form } = useForm({
    email: ''
  })

  const disableForgetPasswordButton = useMemo(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const isEmailValid = emailRegex.test(data.email)
    if (!isEmailValid) return true
    if (form.processing) return true
    return false
  })

  function submit(e) {
    e.preventDefault()
    form.post('/forgot-password')
  }

  return (
    <>
      <Head title="Forgot password | Mellow"></Head>
      <section className="flex min-h-screen flex-col justify-center bg-gradient-to-b from-brand-50/10 to-[#F9FAFB] text-black sm:items-center">
        <main className="mt-10 bg-white px-4 py-10 text-black sm:w-7/12 sm:rounded-lg sm:px-8 sm:shadow-lg md:w-6/12 lg:w-5/12 xl:w-4/12">
          <section className="mb-6 flex flex-col items-center justify-center space-y-2 text-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="50" height="50" rx="25" fill="#F4ECFF" />
              <g clipPath="url(#clip0_70_1212)">
                <path
                  d="M21.6287 34C20.271 33.9991 18.9595 33.5072 17.9361 32.6151C16.9127 31.7229 16.2465 30.4907 16.0604 29.1459C15.8744 27.801 16.181 26.4342 16.9238 25.2977C17.6665 24.1612 18.7953 23.3317 20.1017 22.9623C21.0513 22.6903 22.0565 22.6779 23.0125 22.9263L28.9435 16.9968C29.2583 16.6797 29.633 16.4284 30.0458 16.2573C30.4585 16.0862 30.9012 15.9987 31.348 16C32.0512 16.0006 32.7254 16.2802 33.2226 16.7774C33.7198 17.2746 33.9994 17.9488 34 18.652C34.0011 19.0989 33.9137 19.5415 33.7428 19.9543C33.5718 20.3672 33.3207 20.7421 33.004 21.0573L32.5 21.5613C32.218 21.8413 31.8369 21.999 31.4395 22H30.25V22.75C30.25 23.1478 30.0919 23.5294 29.8106 23.8107C29.5293 24.092 29.1478 24.25 28.75 24.25H28V25.4395C28.0005 25.6366 27.9619 25.8318 27.8865 26.0138C27.8111 26.1958 27.7002 26.3611 27.5605 26.5L27.073 26.9875C27.3227 27.9431 27.3105 28.9483 27.0377 29.8975C26.7308 30.979 26.108 31.9443 25.2491 32.6697C24.3902 33.3951 23.3344 33.8476 22.2167 33.9693C22.0214 33.9896 21.8251 33.9998 21.6287 34ZM21.6287 24.25C20.8608 24.2493 20.108 24.4629 19.4549 24.8668C18.8019 25.2707 18.2745 25.8489 17.9322 26.5363C17.5899 27.2237 17.4463 27.993 17.5175 28.7575C17.5887 29.5221 17.8719 30.2516 18.3353 30.864C18.7986 31.4763 19.4237 31.9472 20.1401 32.2236C20.8565 32.5 21.6359 32.5709 22.3904 32.4283C23.145 32.2858 23.8447 31.9355 24.411 31.4168C24.9772 30.8981 25.3875 30.2317 25.5955 29.4925C25.8295 28.6799 25.8033 27.8145 25.5205 27.0175C25.4743 26.8844 25.4666 26.741 25.4982 26.6037C25.5297 26.4665 25.5993 26.3408 25.699 26.2413L26.5 25.4395V24.25C26.5 23.8522 26.658 23.4707 26.9393 23.1894C27.2206 22.9081 27.6022 22.75 28 22.75H28.75V22C28.75 21.6022 28.908 21.2207 29.1893 20.9394C29.4706 20.6581 29.8522 20.5 30.25 20.5H31.4395L31.9435 19.996C32.1205 19.8199 32.2608 19.6104 32.3563 19.3797C32.4518 19.149 32.5006 18.9017 32.5 18.652C32.4998 18.3467 32.3785 18.0539 32.1626 17.8379C31.9468 17.6219 31.6541 17.5004 31.3487 17.5C31.0989 17.4994 30.8514 17.5483 30.6206 17.644C30.3897 17.7396 30.1802 17.8801 30.004 18.0573L23.7557 24.3048C23.656 24.4044 23.5302 24.474 23.3928 24.5054C23.2554 24.5368 23.1119 24.5289 22.9787 24.4825C22.5438 24.3294 22.0861 24.2508 21.625 24.25H21.6287ZM19.75 29.5C19.75 29.6484 19.794 29.7934 19.8764 29.9167C19.9588 30.04 20.0759 30.1362 20.213 30.1929C20.35 30.2497 20.5008 30.2645 20.6463 30.2356C20.7918 30.2067 20.9254 30.1352 21.0303 30.0303C21.1352 29.9255 21.2066 29.7918 21.2356 29.6463C21.2645 29.5008 21.2497 29.35 21.1929 29.213C21.1361 29.076 21.04 28.9588 20.9167 28.8764C20.7933 28.794 20.6483 28.75 20.5 28.75C20.3011 28.75 20.1103 28.829 19.9697 28.9697C19.829 29.1103 19.75 29.3011 19.75 29.5Z"
                  fill="#6C25C1"
                />
              </g>
              <defs>
                <clipPath id="clip0_70_1212">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(16 16)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h1 className="text-2xl">Forgot password?</h1>
            <p className="text-lg text-gray">
              We'll send reset instructions to your email
            </p>
          </section>
          <form onSubmit={submit} className="mb-4 flex flex-col space-y-6">
            <InputEmail
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
            {form.errors.email && (
              <p className="text-red-500">{form.errors.email}</p>
            )}
            <InputButton
              processing={form.processing}
              disabled={disableForgetPasswordButton}
            />
          </form>
        </main>
        <footer className="my-8 text-center text-black">
          <Link href="/login" className="flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-current"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.6667 7.33337H6L8.19333 5.14004C8.25582 5.07806 8.30542 5.00433 8.33926 4.92309C8.37311 4.84185 8.39053 4.75471 8.39053 4.66671C8.39053 4.5787 8.37311 4.49156 8.33926 4.41032C8.30542 4.32908 8.25582 4.25535 8.19333 4.19337C8.06843 4.06921 7.89946 3.99951 7.72333 3.99951C7.54721 3.99951 7.37824 4.06921 7.25333 4.19337L4.39333 7.06004C4.14294 7.30894 4.00149 7.64699 4 8.00004C4.00324 8.35078 4.14456 8.68611 4.39333 8.93337L7.25333 11.8C7.31549 11.8618 7.3892 11.9106 7.47025 11.9439C7.55129 11.9771 7.63809 11.9941 7.72569 11.9937C7.81329 11.9934 7.89997 11.9759 7.98078 11.9421C8.06159 11.9083 8.13495 11.8589 8.19667 11.7967C8.25839 11.7345 8.30726 11.6608 8.3405 11.5798C8.37373 11.4987 8.39068 11.4119 8.39037 11.3243C8.39006 11.2368 8.3725 11.1501 8.33869 11.0693C8.30489 10.9885 8.25549 10.9151 8.19333 10.8534L6 8.66671H12.6667C12.8435 8.66671 13.013 8.59647 13.1381 8.47144C13.2631 8.34642 13.3333 8.17685 13.3333 8.00004C13.3333 7.82323 13.2631 7.65366 13.1381 7.52864C13.013 7.40361 12.8435 7.33337 12.6667 7.33337Z" />
            </svg>
            <span className="pl-2">Back to login</span>
          </Link>
        </footer>
      </section>
    </>
  )
}
