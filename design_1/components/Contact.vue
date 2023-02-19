<template>
    <div
        class="w-full flex flex-col gap-y-8 px-4 md:px-8 lg:px-20 xl:px-48 py-8 mt-4 xl:mt-6 bg-[url('/pattern.svg')] bg-top"
    >
        <div class="w-full flex flex-col gap-y-1">
            <h4 class="text-base uppercase font-light text-[#AD9263]">Let's talk</h4>
            <h1 class="text-3xl lg:text-4xl capitalize font-semibold mt-2">Request Consultation</h1>
            <p class="text-base text-neutral-700 mt-3">
                We’d love to hear from you! Drop us Email and let’s start a conversation.
            </p>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12 pt-0">
            <div class="flex flex-col gap-y-4">
                <form class="mt-4 xl:mt-6 w-full pr-10 md:pr-0">
                    <div class="grid gap-6 mb-4 xl:mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-base font-medium text-gray-900"
                                >First name</label
                            >
                            <input
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-base font-medium text-gray-900"
                                >Last name</label
                            >
                            <input
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div class="mb-4 xl:mb-6">
                        <label for="phone" class="block mb-2 text-base font-medium text-gray-900">Phone number</label>
                        <input
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                        />
                    </div>
                    <div class="mb-4 xl:mb-6">
                        <label for="email" class="block mb-2 text-base font-medium text-gray-900">Email address</label>
                        <input
                            type="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="john.doe@company.com"
                            required
                        />
                    </div>
                    <div class="mb-4 xl:mb-6">
                        <label for="subject" class="block mb-2 text-base font-medium text-gray-900">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div class="mb-4 xl:mb-6">
                        <label for="message" class="block mb-2 text-base font-medium text-gray-900"
                            >Your message (optional)</label
                        >
                        <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg outline-none border border-gray-300 focus:ring-[#AD9263] focus:border-[#AD9263] transition duration-200"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="text-white bg-[#AD9263] hover:bg-[#AD9263]/80 focus:ring-2 outline-none focus:ring-[#AD9263] font-medium rounded-lg text-lg tracking-wide uppercase w-full sm:w-auto px-8 py-2 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div class="flex flex-col pt-6">
                <div class="w-full h-[300px] md:h-full flex justify-end items-center z-0">
                    <Map />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-2 mt-4">
            <h3 class="text-2xl lg:text-3xl font-semibold">Call us</h3>
            <p class="text-base">
                Questions about availability, plans, or consultancy? Just have your people call our people.
            </p>
            <div class="flex flex-row items-center gap-x-2 mt-4">
                <div class="w-4 lg:w-5 h-4 lg:h-5">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        ></path>
                    </svg>
                </div>
                <span class="text-lg lg:text-xl text-blue-500 font-black">(+254) 794 818 111</span>
            </div>
        </div>
    </div>
</template>
