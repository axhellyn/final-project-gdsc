import Button from "./Button";

export default function ContactForm() {
  return (
    <div className="w-full md:w-fit bg-white bg-opacity-10 shadow-lg flex flex-col gap-4 justify-center px-10 py-6 rounded-lg">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4" placeholder="Your name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" className="w-full md:w-80 xl:w-96 border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4" placeholder="Your email" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">How can we help you?</label>
        <textarea
          className="w-full md:w-80 xl:w-96 resize-none border-2 bg-transparent border-purple rounded-lg focus:outline-none py-2 px-4"
          id="message"
          type="text"
          placeholder="Type your message here.."
          rows={5}
        />
      </div>
      <div className="flex justify-center">
        <Button textButton="Send Message" />
      </div>
    </div>
  );
}
